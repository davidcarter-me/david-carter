import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class Footer extends PureComponent {
  render() {
    const { colour } = this.props;
    return (
      <footer className={`Footer Footer--${colour}`}>
        <div className="container">
          <div className="Footer__inner">
            <h5>Footer</h5>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  colour: PropTypes.string.isRequired,
};

export default Footer;
