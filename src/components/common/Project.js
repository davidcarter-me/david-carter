import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class Footer extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <article className="Project">
        <div className="Project__inner">
          <h5 className="Project__title">{title}</h5>
        </div>
      </article>
    );
  }
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
