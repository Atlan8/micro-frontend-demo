import logo from "./logo.svg";
import "./App.css";
import Cookies from "js-cookie";

function App() {
  const goHome = () => {
    window.location.href = "/";
  };
  const getCookie = () => {
    const coo = Cookies.get("custom-data");
    console.log("----> ", coo);
  };
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
      <div className="customBox" style={{ width: "500px", height: "300px", margin: "20px 0", border: "1px solid #000" }}></div>
    </div>
  );
}

export default App;
