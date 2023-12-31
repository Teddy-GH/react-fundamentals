import React, { Component } from 'react'

 class RenderCounter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
    
      incrementCount = () => {
        this.setState((prevState) => {
          return { count: prevState.count + 1 };
        });
      };
    
  render() {
    return (
      <div>
        {/* using render props */}
        {/* {this.props.render(this.state.count, this.incrementCount)} */}

        {/* using children props */}
        {this.props.children(this.state.count, this.incrementCount)}

      </div>
    )
  }
}

export default RenderCounter