import StandardLayout from "layouts/StandardLayout";
import Home from "./Home";

import Project from "./Project";

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
      indexRoute: Project,
    },
  ];
};

export default createRoutes;

// import React from "react";
// import ReactDOM from "react-dom";
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import About from "../pages/About";
// import Layout from "../pages/Layout";
// import Work from "../pages/Work";
// import Works from "../pages/Works";

// const AppRoutes = (
//   <Router history={hashHistory}>
//     <Route path="/" component={Layout}>
//       <IndexRoute component={Works}></IndexRoute>
//       <Route path="work/:id" component={Work}></Route>
//       <Route path="about" component={About}></Route>
//     </Route>
//   </Router>
// );

// export default AppRoutes;
