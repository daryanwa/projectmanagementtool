import React from "react";

import "./App.css";
import LoginSignupComponent from "./components/Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <LoginSignupComponent /> */}
      <Outlet />
    </div>
  );
}

export default App;
