import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <h1>Context API</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
