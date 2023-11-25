import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Teddy",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Teddy",
      });
    }, 2000);
  }
  render() {
    console.log('************Parent Component render****************')
    const { name } = this.state;
    return (
      <div>
        Parent Component
        {/* <RegComp name={name} />
        <PureComp name={name} /> */}
        <MemoComp name={name}/>
      </div>
    );
  }
}

export default ParentComp;
