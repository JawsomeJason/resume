import React, { PropTypes } from 'react';

const displayName = 'Button';

const propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

const Button = (props) => {
  const {
    children,
    label
  } = props;

  return (
    <button className="button" aria-label={label}>
      <span className="text">{children}</span>
    </button>
  );
};

Button.displayName = displayName;
Button.propTypes = propTypes;

export default Button;
