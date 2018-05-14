import React, { Component } from "react";
import PropTypes from "prop-types";
import { Project } from "components";

export class TopProjects extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="TopProjects">
        <div className="TopProjects__content">
          {projects.map((item, i) => (
            <Project key={i} title={item.title} img={item.img} skills={item.skills} active={item.active} />
          ))}
        </div>
      </div>
    );
  }
}

TopProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  // postsContent: PropTypes.array.isRequired,
};

export default TopProjects;
