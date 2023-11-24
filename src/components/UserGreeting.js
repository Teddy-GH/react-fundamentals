import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    let message
     const { isLoggedIn } = this.state;
    
    //#1 If /else 

    // if (isLoggedIn) {
    //     return <div>Welcome Teddy</div>
        
    // } else {
    //    return <div>Welcome Guest</div>

    // }

    //#2 Element variable 

    // if (isLoggedIn) {
    //   message = <div>Welcome Teddy</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return message;

    // #3 Ternary  operator
    // return (
    //     isLoggedIn ? <div>'Welcome Teddy'</div> : <div>'Welcome Guest'</div>
    // )

    // #4 Short circuit used to render something or nothing
     return isLoggedIn  && <div>Welcome Teddy</div>

    // return (
    //   <div>
    //     <div>Welcome Teddy</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
