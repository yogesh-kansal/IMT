import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import { useState } from "react/cjs/react.development";

function App() {
  const [curVal, setVal] = useState('grouped');

  return (
    <div className="app">
      <div className="app_nav">
        <Header setVal = {setVal}/>
      </div>

      <Home curVal = {curVal}/>
    </div>
  );
}

export default App;
