import React, { Component } from "react";
// import PropTypes from "prop-types";
import TopProjects from "./TopProjects";
import Page from "layouts/Page";

export class Home extends Component {
  render() {
    const projects = [
      {
        title: "Luxure Global Citizen",
        img: "lgc",
        skills: ["react", "redux", "sagas", "selectors", "es2016", "bem"],
      },
      {
        title: "Gregs",
        img: "gregs",
        skills: ["angular", "jquery", "bem", "api"],
      },
      {
        title: "Sky Bet",
        img: "skyBet",
        skills: ["react", "redux", "sagas", "selectors", "immutable.js", "api", "es2016", "bem"],
      },
      {
        title: "Renualt",
        img: "rfm",
        skills: ["react", "redux", "sagas", "selectors", "immutable.js", "api", "es2016", "bem"],
      },
    ];
    return (
      <Page pageClass="Home" title="Home">
        <div className="Home">
          <div className="container">
            <div className="Home__inner">
              <div className="Home__masthead">
                <div className="Home__masthead__inner">
                  <h3 className="Home__masthead__title">Top Projects</h3>
                </div>
              </div>
              <div className="Home__content">
                <div className="Home__content__topProjects">
                  <TopProjects projects={projects} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

Home.propTypes = {
  // contentGetPosts: PropTypes.func.isRequired,
  // postsContent: PropTypes.array.isRequired,
};

export default Home;
