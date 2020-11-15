import "./../App.css";
import { useEffect, useState } from "react";
import randomLoc from "./../functions/randomLoc";

function Field2(props) {
  //表示するチェックポイントの位置の配列
  const [location, setLocation] = useState([]);
  const [start, setStart] = useState([randomLoc(), randomLoc()]);
  const [goal, setGoal] = useState([randomLoc(), randomLoc()]);
  // let start;
  // let goal;

  useEffect(() => {
    // 位置を保存する配列
    let locArr = [];
    // start = [randomLoc(), randomLoc()];
    // locArr.push(start);
    for (let i = 0; i < props.showingPoints; i++) {
      locArr.push([randomLoc(), randomLoc()]);
    }
    // goal = [randomLoc(), randomLoc()];
    // locArr.push(goal);
    console.log(locArr);
    setLocation(locArr);
  }, []);

  // 500✖︎500のフィールド
  return (
    <svg className="field" viewBox="0 0 500 500">
      <circle className="circle" cx={start[0]} cy={start[1]} r="5" fill="green"></circle>
      {location.map((pos) => {
        console.log("hello");
        return (
          <circle
            className="circle"
            cx={pos[0]}
            cy={pos[1]}
            r="5"
            fill="red"
          ></circle>
        );
      })}
      <circle className="circle" cx={goal[0]} cy={goal[1]} r="5" fill="blue"></circle>
    </svg>
  );
}

export default Field2;
