import logo from "./logo.svg";
import "./App.css";

const start = [0, "tokyo", 35.68944, 139.69167];

function App() {
  const location = require("./location");
  const result = [
    11,  2,  3,  6,  7,  8,  9, 19, 24, 23, 27,
    25, 26, 35, 31, 30, 32, 36, 42, 44, 43, 34,
    28, 22, 21, 20, 17, 12, 10, 18, 14, 16, 29,
    33, 38, 39, 40, 41, 37, 15, 13,  5,  4,  1,
     0, 45
  ];

  let route=[]

  for(let i=0;i< result.length-1;i++){
    if(i!==result.length-1){
        console.log(result[i+1]);
        route.push([result[i],result[i+1]])
    }
  }

  return (
    <svg className="field" viewBox="0 0 500 500">
      {location.map((elm) => {
        const left = (elm[2]-25)*25;
        const bottom = 500-((elm[3] - 125)*25);
        // const left = elm[2];
        // const bottom = 500-elm[3];

        return (
        <circle className="circle" cx={left} cy={bottom} r="5" fill="red"></circle>
        )
      })}

      {
          route.map((elm)=>{
            // console.log((location[elm[0]][2]-25)*25);
            // console.log(500-((location[elm[0]][3] - 125)*25));
            // console.log(location[elm[1]]);
            console.log(elm);
            const x1=(location[elm[0]][2]-25)*25;
            const y1=500-((location[elm[0]][3] - 125)*25);
            const x2=(location[elm[1]][2]-25)*25;
            const y2=500-((location[elm[1]][3] - 125)*25);

            return(
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000"></line>
            )
          })
      }

    </svg>
  );
}

export default App;
