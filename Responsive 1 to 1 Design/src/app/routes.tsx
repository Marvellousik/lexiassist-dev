import { createBrowserRouter } from "react-router";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
]);
