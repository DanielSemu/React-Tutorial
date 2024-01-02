import React, { Component } from 'react'
// the snipet to create class components is rcc
 class Counter extends Component {
// the snipet to create the constructor is  rconst
constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}
increment(){
    this.setState({
        count:this.state.count +1
    }, ()=> {console.log('callback value', this.state.count)})
    console.log(this.state.count)
    //the output of console is one less than the browser because the class for setSate is asynchronies

}

decreament(){
    this.setState({
        count:this.state.count -1
    })
}
  render() {
    return (

      <div>
        count - {this.state.count}
        
        <button onClick={()=>this.increment()}>Increment</button>
        <button onClick={()=>this.decreament()}>Decreament</button>
      </div>
    )
  }
}

export default Counter