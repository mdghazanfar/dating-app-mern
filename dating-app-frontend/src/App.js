import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import DatingCards from "./Components/DatingCard/DatingCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="dating">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
