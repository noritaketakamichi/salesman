import "./../App.css";
import { useState } from "react";

function Forms(props) {
  //チェックポイントの数
  const [checkPointsNum, setCheckPointsNum] = useState(0);

  //フォームの入力が起こった時番号を保存
  const setPointsNumber = (e) => {
    setCheckPointsNum(e.target.value);
  };

  //【世代数】フォームの入力が起こった時番号を保存
  const setGenNumber = (e) => {
    props.setiterations(e.target.value);
  };

  //チェックポイントを表示
  const setPoints = () => {
    props.setShowingPoints(checkPointsNum);
  };

  const startCalc = () => {
    props.setCaluculating(true);
  };

  return (
    <>
      <div>
        <input type="text" onChange={setPointsNumber} />
        <input type="submit" value="配置する" onClick={setPoints} />
      </div>
      <div>
        <input type="text" onChange={setGenNumber}/>
        <input type="submit" value="開始" onClick={startCalc} />
      </div>
      {/* 現在の距離 */}
      <h1>世代数：{props.generationNum+1}</h1>
      <h1>距離：{props.distance}</h1>
    </>
  );
}

export default Forms;
