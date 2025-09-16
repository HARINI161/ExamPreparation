import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import { StartYourPrep } from "../Pages/StartYourPrep";
import ViewStudyPlan from "../Pages/ViewStudyPlan";
import TakeMockTest from "../Pages/TakeMockTest";
import ViewPerformanceAnalysis from "../Pages/ViewPerformanceAnalysis";
import AskAiDoubtSolver from "../Pages/AskAiDoubtSolver";

export let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/Home", element: <Home /> }
    ]
  },
  { path: "/Login", element: <Login /> },
  { path: "/StartYourPrep", element: <StartYourPrep /> },
  { path: "/ViewStudyPlan", element: <ViewStudyPlan /> },
  { path: "/TakeMockTest", element: <TakeMockTest /> },
  { path: "/ViewPerformanceAnalysis", element: <ViewPerformanceAnalysis /> }, 
{path:"/AskAiDoubtSolver",element:<AskAiDoubtSolver/>}// Matches NavLink path
]);
