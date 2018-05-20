import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class Footer extends PureComponent {
  render() {
    const { title, img, skills } = this.props;
    return (
      <article className="Project">
        <a href="#">
          <div className="Project__inner">
            <div className={`Project__img Project__img--${img}`} />
            <div>
              <h5 className="Project__title">{title}</h5>
            </div>
            <div className="Project__skills">
              {skills.map((skill, i) => (
                <div key={i} className={`Project__skills__skill Project__skills__skill--${skill}`} />
              ))}
            </div>
          </div>
        </a>
      </article>
    );
  }
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Footer;
