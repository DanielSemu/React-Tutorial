import React, { Component } from 'react'

export class classClick extends Component {
  clickHandler(){
    console.log("Class clicked")
  }
    render() {
    return (
      <div>
        {/* here methods are accessed by this key word */}
        <button onClick={this.clickHandler}>Clss Clicked</button>
      </div>
    )
  }
}

export default classClick
