import React from "react";

const Hello = () => {
  // return (
  //     <h1>Hello React</h1>
  // )

  // Using createElement
  return React.createElement(
    "div",
    {id: 'hello', className: 'helloClass'},
    React.createElement("h1", null, "Hello React")
  );
};

export default Hello;
