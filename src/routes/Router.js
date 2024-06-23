import { createBrowserRouter } from "react-router-dom";
import MainComponents from "../components/Main/MainComponents";
import PageNotFoundComponent from "../components/PageNotFound/PageNotFoundComponent";
import Layout from "../components/Layout";
import LoginComponent from "../components/Login/LoginComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
    errorElement: <PageNotFoundComponent />,
  },
  {
    path: "main",
    element: <MainComponents />,
    errorElement: <PageNotFoundComponent />,
  },
]);
