import { RouteProps } from "react-router-dom";
import Home from "../views/Home";

const routes: RouteProps[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
];

export default routes;
