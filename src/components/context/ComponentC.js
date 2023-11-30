import React, { Component } from 'react'
import ComponentE from './ComponentE'
import FunctionalComponentE from './FunctionalComponentE'

 class ComponentC extends Component {
  render() {
    return (
      <div>
        {/* <ComponentE /> */}
        <FunctionalComponentE />
      </div>
    )
  }
}

export default ComponentC