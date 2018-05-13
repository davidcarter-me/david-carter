import React, { Component } from "react";
// import PropTypes from "prop-types";
import TopProjects from "./TopProjects";
import Page from "layouts/Page";

export class Home extends Component {
  render() {
    const projects = [{ title: "Proejct 1" }, { title: "Proejct 2" }, { title: "Proejct 3" }, { title: "Proejct 4" }];
    return (
      <Page pageClass="Home" title="Home">
        <div className="Home">
          <div className="container">
            <div className="Home__inner">
              <div className="Home__masthead">
                <div className="Home__masthead">
                  <div className="Home__masthead__inner">
                    <h2 className="Home__masthead__title">Top Projects</h2>
                  </div>
                </div>
              </div>
              <div className="Home__content">
                <div className="Home__content">
                  <div className="Home__content__topProjects">
                    <TopProjects projects={projects} />
                  </div>
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
