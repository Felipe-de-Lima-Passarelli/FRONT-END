import "./App.css";
import { useState } from "react";
import UserStatus from "./components/UserStatus";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h2>Exercício</h2>
      <UserStatus isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
