import React, { PureComponent } from "react";
import profileImage from "images/components/common/header/profile_image.jpg";
import PropTypes from "prop-types";

export class Header extends PureComponent {
  render() {
    return (
      <header className="Header">
        <div className="container">
          <div className="Header__inner">
            <div className="Header__masthead">
              <div className="Header__masthead__img">
                <img src={profileImage} alt="" />
              </div>
              <h1 className="Header__masthead__title">David Carter</h1>
              <div className="Header__masthead__social">social links</div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  // renaultLogo: PropTypes.string.isRequired,
};

export default Header;
