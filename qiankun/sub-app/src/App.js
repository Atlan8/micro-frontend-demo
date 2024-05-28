import logo from "./logo.svg";
import "./App.css";
import Cookies from "js-cookie";
import { globalState } from "./globalState";
import { useMemo } from "react";

function App() {
  const goHome = () => {
    window.location.href = "/";
  };
  const getCookie = () => {
    const coo = Cookies.get("custom-data");
    console.log("----> ", coo);
  };
  const changeGlobalState = () => {
    globalState.setGlobalState({'store-sub-app': 'xixixixi'})
  }

  const renderButton = useMemo(() => {
    return <button onClick={changeGlobalState}>改变全局状态</button>
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={goHome}>返回主应用</button>
      <button onClick={getCookie}>获取主应用Cookie</button>
      {
        renderButton
      }
      <div className="customBox" style={{ width: "500px", height: "300px", margin: "20px 0", border: "1px solid #000" }}></div>
    </div>
  );
}

export default App;
