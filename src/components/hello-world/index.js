import PropTypes from "prop-types";
import "./index.css";

function HelloWorld({ text, ...restProps }) {
  return <h1 {...restProps}>{text}</h1>;
}

export default HelloWorld;

HelloWorld.propTypes = {
  text: PropTypes.string.isRequired,
};

HelloWorld.defaultProps = {
  text: "Hello World!",
};
