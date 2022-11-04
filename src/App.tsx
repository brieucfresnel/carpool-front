import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { CarsTable } from "./components/CarsTable";

function App() {
  return (
    <div className="App">
      <header>
        <Sidebar />
      </header>
      <main>
        <CarsTable />
      </main>
    </div>
  );
}

export default App;
