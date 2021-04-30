import "./App.css";

import Navbar from "./contents/navbar";

import Sidebar from "./contents/sidebar";
import RightView from "./contents/rightView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <RightView />
    </div>
  );
}

export default App;
