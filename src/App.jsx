import "./App.css";
import Flags from "./Flags";
import { Routes, Route } from "react-router-dom";
import FlagPage from "./FlagPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Flags />} />
        <Route path="/flags/:name" element={<FlagPage />} />
      </Routes>
    </div>
  );
};

export default App;
