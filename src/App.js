import './App.css';
import { useState } from "react";
import Field from './components/Field.jsx'
import Field2 from './components/Field2.jsx'
import Forms from './components/Forms.jsx'

function App() {

  //表示するチェックポイントの数
  const [showingPoints, setShowingPoints] = useState(20);

  return (
    <div className="App">
      <Field />
      <Field2 showingPoints={showingPoints}/>
      <Forms setShowingPoints={setShowingPoints} />
      <p>（案）ボタン押したらランダムに位置が決まる</p>
      <p>次にボタンを押したら最適化が始まる</p>
      <p>スタートは常に隅または真ん中にする</p>
      <p>ひとふでがき</p>
    </div>
  );
}

export default App;
