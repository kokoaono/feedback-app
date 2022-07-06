import React from "react";

function Button({ children, version, type, isDisabled }) {
  return (
    <Button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </Button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
