import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Pages/Home";

function App() {

  return (
    <div className="app">
      <div className="app_nav">
        <h2>Messaging / <span>Affinity Map</span></h2>
      </div>

      <Home />
    </div>
  );
}

export default App;
