import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createRoutes from "./routes";
// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App routes={createRoutes()} />, document.getElementById("root"));
// registerServiceWorker();
