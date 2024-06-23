import React from "react";
import LoginComponent from "./Login/LoginComponent";
import MainComponents from "./Main/MainComponents";
import { Outlet } from "react-router-dom";

function LoginSignupComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LoginSignupComponent;
