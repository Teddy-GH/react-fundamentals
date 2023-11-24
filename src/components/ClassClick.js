import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Clicked from class click handler')
    }

  render() {
    return (
      <div>
       <h2>ClassClick</h2> 
       <button onClick={this.clickHandler}>Click me</button>
        </div>
    )
  }
}

export default ClassClick