import StandardLayout from "layouts/StandardLayout";
import Home from "./Home";

import ProjectPost from "./ProjectPost";

export const createRoutes = () => {
  return [
    {
      path: "/",
      component: StandardLayout,
      indexRoute: Home,
    },
    {
      path: "projects/:project",
      component: StandardLayout,
      indexRoute: ProjectPost,
    },
  ];
};

export default createRoutes;
