import "./../App.css";
import { useState } from "react";

function Forms(props) {
  //チェックポイントの数
  const [checkPointsNum, setCheckPointsNum] = useState(0);

  //フォームの入力が起こった時番号を保存
  const setNumber = (e) => {
    console.log(e.target.value);
    setCheckPointsNum(e.target.value);
  };

  const setPoints = () => {
    props.setShowingPoints(checkPointsNum);
    console.log("object");
  };

  return (
    <div>
      <input type="text" onChange={setNumber} />
      <input type="submit" value="配置する" onClick={setPoints} />
    </div>
  );
}

export default Forms;
