import StandardLayout from "layouts/StandardLayout";
import Home from "./Home";

export const createRoutes = () => {
  return [
    {
      path: "/",
      component: StandardLayout,
      indexRoute: Home,
    },
  ];
};

export default createRoutes;
