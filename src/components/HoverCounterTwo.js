import React, { Component } from "react";

class HoverCounterTwo extends Component {
  
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseLeave={incrementCount}>Hovered {count} times</h2>;
  }
}

export default HoverCounterTwo;
