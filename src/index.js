import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createRoutes from "./routes";

ReactDOM.render(<App routes={createRoutes()} />, document.getElementById("root"));
