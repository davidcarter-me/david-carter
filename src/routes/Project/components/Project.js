import React, { Component } from "react";
// import PropTypes from "prop-types";
import Page from "layouts/Page";

export class Project extends Component {
  render() {
    console.log("Project props", this.props);
    return (
      <Page pageClass="Project" title="Project">
        <div className="Project">
          <div className="container">
            <div className="Project__inner">
              <div className="Project__masthead">
                <div className="Project__masthead__inner">
                  <h3 className="Project__masthead__title">Top Project</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

Project.propTypes = {
  // contentGetPosts: PropTypes.func.isRequired,
  // postsContent: PropTypes.array.isRequired,
};

export default Project;
