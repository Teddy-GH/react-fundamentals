import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }
 
    // clickHandler() {
    //     this.setState({ message: 'Goodbye' })
    //     console.log(this)
    // }

    clickHandler = () =>  {
        this.setState({
            message: 'Goodbye !'
        })
     }

    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Binding in the render Approch-1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Using arrow function Approch-2 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* The 3rd approch binding in the class constractor */}
         {/* <button onClick={this.clickHandler}>Click</button> */}
         {/* Approch 4 arrow function */}
         {/* <button onClick={this.clickHandler}>Click</button> */}
      </div>
    )
  }
}

export default EventBind