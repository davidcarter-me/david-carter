import React, { Component } from "react";
// import PropTypes from "prop-types";
import Page from "layouts/Page";

export class Home extends Component {
  render() {
    return (
      <Page pageClass="Home" title="Home">
        <div className="Home">
          <div className="container">
            <div className="Home__inner">
              <h1>Home</h1>
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
