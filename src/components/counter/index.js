import { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

// const Counter = ({ count }) => (
//   <div className="wrapper">
//     <h3>Class counter</h3>
//     <div className="counter">{count}</div>
//   </div>
// );

// export default Counter;

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: this.props.size,
      count: 0,
    };
  }

  increment = () => {
    this.setState((state) => {
      return { count: ++state.count };
    });
  };

  checkClass = () => {
    if (this.props.count === this.state.count) {
      this.setState({ size: this.state.size * 2 });
    }
  };

  render() {
    const { count, color, size } = this.props;
    const style = {
      fontSize: `${size}rem`,
    };
    const modifiedCount = count + 1;
    this.checkClass();
    // console.log(this.state);
    return (
      <div className="wrapper">
        <h3>State counter</h3>
        <div className={`counter ${color}`} style={style}>
          {modifiedCount}
        </div>
        <h3>State cunter</h3>
        <div className="couter">{this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
};
