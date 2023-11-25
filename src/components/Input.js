import React, { Component } from 'react'

 class Input extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <h2>Focus Child Input from parent</h2>
        <input type='text' ref={this.inputRef} />
      </div>
    )
  }
}

export default Input