// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from './timer'
import MongoData from './mongoData'


function App() {
  const [data, setData] = React.useState(null);
  // const [dataDB, setDataDB] = React.useState(null);


  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <div><Timer /></div>
      <div><MongoData /></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading...." : data}</p>
      </header>
    </div>
  );
}

export default App;