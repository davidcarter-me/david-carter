import React, { Component } from "react";
import PropTypes from "prop-types";

export class ProjectGallery extends Component {
  render() {
    const { imgs } = this.prop;
    return (
      <div className="ProjectGallery">
        {imgs.map(img, i) => (
          <div className={`ProjectGallery__img ProjectGallery__img--${img}`} />;
        )}
      </div>
    );
  }
}

ProjectGallery.propTypes = {
  imgs: PropTypes.array.isRequired,
  // postsContent: PropTypes.array.isRequired,
};

export default ProjectGallery;
