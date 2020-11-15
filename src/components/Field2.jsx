import "./../App.css";
import { useEffect, useState } from "react";

function Field(props) {
  //表示するチェックポイントの位置の配列
  const [location, setLocation] = useState([]);

  useEffect(() => {}, []);

  return <svg className="field" viewBox="0 0 500 500"></svg>;
}

export default Field;
