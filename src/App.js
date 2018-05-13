import React, { Component } from "react";
import "./styles/main.scss";
import { Router, browserHistory } from "react-router";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    const { routes } = this.props;
    // const history = createHistory();
    console.log("app");
    return <Router history={browserHistory} children={routes} onUpdate={() => window.scrollTo(0, 0)} />;
  }
}
App.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default App;
