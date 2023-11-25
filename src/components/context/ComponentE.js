import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

 class ComponentE extends Component {
    // Passing context type using static key word
    static contextType = UserContext
  render() {
    return (
      <div>
        Componet E context {this.context} 
        <ComponentF />
      </div>
    )
  }
}

// Passing context type
// ComponentE.contextType = UserContext


export default ComponentE