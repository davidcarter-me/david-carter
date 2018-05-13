import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export class Button extends PureComponent {
  deleteBtn = () => {
    this.props.deleteElem(this.props.text);
  };

  render() {
    const {
      extraClasses,
      extraWorkingClass,
      working,
      disabled,
      type = null,
      text,
      onClick,
      modifiers,
      btnIcon,
    } = this.props;
    const modifiersFormatted = modifiers ? modifiers.split(" ").map(modifier => `Button--${modifier}`) : null;
    const icon = btnIcon ? btnIcon.split(" ").map(btnIcon => `Button--${btnIcon}`) : null;
    return (
      <button
        type={type}
        onClick={!disabled ? onClick : () => {}}
        disabled={disabled}
        className={classNames(
          "Button",
          extraClasses,
          modifiersFormatted,
          { [`${extraWorkingClass}`]: working && extraWorkingClass },
          { "Button--working": working },
          { "Button--disabled": disabled }
        )}
      >
        <div
          value={text}
          className={classNames("Button__inner", {
            "Button__inner--working": working,
          })}
        >
          <span className="Button__inner__span">{text}</span>
        </div>
        {btnIcon && <div className={icon} onClick={this.deleteBtn} />}
      </button>
    );
  }
}

Button.propTypes = {
  extraClasses: PropTypes.string,
  extraWorkingClass: PropTypes.string,
  working: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  modifiers: PropTypes.string,
  btnIcon: PropTypes.string,
  deleteElem: PropTypes.func,
  // categories: PropTypes.array,
  // getOpportunities: PropTypes.func,
  // handleUserChoice: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  iconClick: () => {},
  btnIcon: "",
  handleUserChoice: false,
};

export default Button;
