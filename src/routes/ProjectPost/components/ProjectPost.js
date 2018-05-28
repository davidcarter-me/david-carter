import React, { Component } from "react";
import PropTypes from "prop-types";
import Page from "layouts/Page";
import content from "../content/content";

export class ProjectPost extends Component {
  render() {
    const params = this.props.params;
    console.log("ProjectPost props", params.project);
    console.log("content", content);
    const project = content[params.project.toUpperCase()];
    return (
      <Page pageClass="ProjectPost" title="ProjectPost">
        <div className="ProjectPost">
          <div className="container">
            <div className="ProjectPost__inner">
              <div className="ProjectPost__masthead">
                <div className="ProjectPost__masthead__inner">
                  <h1 className="ProjectPost__masthead__title">{project.TITLE}</h1>
                  <h2 className="ProjectPost__masthead__subtitle">{project.SUBTITLE}</h2>
                </div>
              </div>
              <div className="ProjectPost__content">
                <div className="ProjectPost__content__inner">
                  <div className="ProjectPost__content__body">
                    <p>{project.BODY}</p>
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

ProjectPost.propTypes = {
  params: PropTypes.object.isRequired,
  // postsContent: PropTypes.array.isRequired,
};

export default ProjectPost;
