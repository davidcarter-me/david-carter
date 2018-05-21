import React from "react";
import PropTypes from "prop-types";
import { Header, Footer } from "components";

export const StandardLayout = ({ children }) => {
  console.log("StandardLayout", children);
  return (
    <div className="StandardLayout">
      <Header />
      {children}
      <Footer colour="grey" />
    </div>
  );
};

StandardLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StandardLayout;
