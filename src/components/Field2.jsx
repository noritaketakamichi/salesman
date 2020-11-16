import "./../App.css";
import { useEffect, useState } from "react";
import randomLoc from "./../functions/randomLoc";

const { genetateInitialArr } = require("./../functions/generateArr");
const { calcDistnceArr } = require("./../functions/calcDist");
const { selection } = require("./../functions/selection");
const { generateChildren } = require("./../functions/generateChildren");

function Field2(props) {
  //表示するチェックポイントの位置の配列
  const [location, setLocation] = useState([]);
  const [start, setStart] = useState([-1, randomLoc(), randomLoc()]);
  const [goal, setGoal] = useState([-2, randomLoc(), randomLoc()]);
  // const [generationNum, setGenerationNum] = useState(10);

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
      console.log(currentRouteArr);

      //距離を計算
      let distanceArr = calcDistnceArr(start, currentRouteArr, goal, location);
      console.log(distanceArr);

      //遺伝のサイクルを回す
      for (let i = 0; i < props.iterations; i++) {
        //2つのルートをルーレット選択で選択
        const SelectedRoutes = JSON.parse(
          JSON.stringify(selection(distanceArr))
        );
        // console.log(SelectedRoutes);
        const parents = JSON.parse(
          JSON.stringify([SelectedRoutes[0][0], SelectedRoutes[1][0]])
        );
        //一番距離が短いやつを表示しよう

        //世代数を表示
        props.setGenerationNum(i);

        //距離を表示
        props.setDistance(SelectedRoutes[0][1]);

        //一点交叉（切り離してくっつける）
        //2つの子供が生成される
        const children = generateChildren(SelectedRoutes);
        // console.log(children);

        //次世代の4ルート
        const nextGen = [...parents, ...children];

        distanceArr = calcDistnceArr(start, nextGen, goal, location);
        await _sleep(1);
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
        console.log("hello");
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
    </svg>
  );
}

export default Field2;
