import './App.css';
import { useState, useEffect } from "react";
import Field from './components/Field.jsx'
import Field2 from './components/Field2.jsx'
import Forms from './components/Forms.jsx'
import img from './img/2.png';

function App() {

  //表示するチェックポイントの数
  const [showingPoints, setShowingPoints] = useState(0);
  const [caluculating, setCaluculating] = useState(false);

  //世代数
  const [generationNum, setGenerationNum] = useState(0);

  //距離
  const [distance, setDistance] = useState("-");

  //イテレーションの数。デフォルトで10
  const [iterations, setiterations] = useState(10);

  return (
    <div className="App">
      {/* <Field /> */}
      <Field2 showingPoints={showingPoints} caluculating={caluculating} iterations={iterations} setGenerationNum={setGenerationNum} setDistance={setDistance}/>
      <img src={img} width="700px"/>
      <Forms setShowingPoints={setShowingPoints} setCaluculating={setCaluculating} setiterations={setiterations} generationNum={generationNum} distance={distance}/>
    </div>
  );
}

export default App;
