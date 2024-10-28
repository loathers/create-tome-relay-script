
import "./App.css";
import { myName } from "kolmafia";
import { useContext } from "react";
import { RefreshContext } from "tome-kolmafia";

import reactLogo from "./assets/react.svg";

function App() {
  useContext(RefreshContext);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        Welcome, {myName()}!
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
