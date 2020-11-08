// import PropTypes from "prop-types";

const Button = ({ children, type }) => {
  return <button type={type}>{children}</button>;
};

// Button.propTypes = {...}

// Button.defaultProps = {
//   type: "submit",
// };

export default Button;
