import React, { Component } from "react";
import PropTypes from "prop-types";
import Page from "layouts/Page";
import content from "../content/content";

export class Project extends Component {
  render() {
    const params = this.props.params;
    console.log("Project props", params.project);
    console.log("content", content);
    const project = content[params.project.toUpperCase()];
    return (
      <Page pageClass="Project" title="Project">
        <div className="Project">
          <div className="container">
            <div className="Project__inner">
              <div className="Project__masthead">
                <div className="Project__masthead__inner">
                  <h1 className="Project__masthead__title">{project.TITLE}</h1>
                  <h2 className="Project__masthead__title">{project.SUBTITLE}</h2>
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
  params: PropTypes.object.isRequired,
  // postsContent: PropTypes.array.isRequired,
};

export default Project;
