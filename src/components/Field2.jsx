import "./../App.css";
import { useEffect, useState } from "react";
import randomLoc from "./../functions/randomLoc";

const { genetateInitialArr } = require("./../functions/generateArr");
const { calcDistnceArr } = require("./../functions/calcDist");
const { selection } = require("./../functions/selection");
const { generateChildren } = require("./../functions/generateChildren");
const { makeRoute } = require("./../functions/makeRoute");
const { mutation } = require("./../functions/mutation3");

function Field2(props) {
  //表示するチェックポイントの位置の配列
  const [location, setLocation] = useState([]);
  const [start, setStart] = useState([-1, randomLoc(), randomLoc()]);
  const [goal, setGoal] = useState([-2, randomLoc(), randomLoc()]);
  const [nearestRoute, setNearestRoute] = useState([]);

  useEffect(async () => {
    //スリープ関数
    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    if (!props.caluculating) {
      // 位置を保存する配列
      let locArr = [];
      for (let i = 0; i < props.showingPoints; i++) {
        locArr.push([i, randomLoc(), randomLoc()]);
      }
      setLocation(locArr);
    } else {
      //計算開始

      //ランダムな経路を4つ作る
      let currentRouteArr = genetateInitialArr(location);

      //距離を計算
      let distanceArr = calcDistnceArr(start, currentRouteArr, goal, location);

      //遺伝のサイクルを回す
      for (let i = 0; i < props.iterations; i++) {
        //2つのルートをルーレット選択で選択
        const SelectedRoutes = JSON.parse(
          JSON.stringify(selection(distanceArr))
        );
        const parents = JSON.parse(
          JSON.stringify([SelectedRoutes[0][0], SelectedRoutes[1][0]])
        );

        /////////////////////////////
        //一番距離が短いやつを表示しよう//
        /////////////////////////////

        //世代数を表示
        props.setGenerationNum(i);

        //距離を表示
        props.setDistance(SelectedRoutes[0][1]);

        let route = makeRoute(start, SelectedRoutes[0][0], goal, location);

        //最短距離を設定
        setNearestRoute(route);

        //一点交叉（切り離してくっつける）
        //2つの子供が生成される
        let children =[];
        
        //親子が一致している間は繰り返す
        while(children.length===0||JSON.stringify([SelectedRoutes[0][0]])===JSON.stringify(children[0])||JSON.stringify([SelectedRoutes[0][0]])===JSON.stringify(children[1])){
          children = generateChildren(SelectedRoutes);
        }

        //突然変異
        //一定の確率で入れ替え

        //いったん突然変異はなくします
        children[1]=mutation(children[1]);

        //次世代の4ルート
        const nextGen = [...parents, ...children];

        distanceArr = calcDistnceArr(start, nextGen, goal, location);

        //少し待つ
        await _sleep(0.1);
      }
    }
  }, [props.showingPoints, props.caluculating]);

  // 500✖︎500のフィールド
  return (
    <svg className="field" viewBox="0 0 500 500">
      <circle
        className="circle"
        cx={start[1]}
        cy={start[2]}
        r="5"
        fill="green"
      ></circle>
      {location.map((pos) => {
        return (
          <circle
            className="circle"
            cx={pos[1]}
            cy={pos[2]}
            r="5"
            fill="red"
          ></circle>
        );
      })}
      <circle
        className="circle"
        cx={goal[1]}
        cy={goal[2]}
        r="5"
        fill="blue"
      ></circle>

      {/* 線 */}
      {nearestRoute.map((elm) => {
        const x1 = elm[0][1];
        const y1 = elm[0][2];
        const x2 = elm[1][1];
        const y2 = elm[1][2];

        return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000"></line>;
      })}
    </svg>
  );
}

export default Field2;
