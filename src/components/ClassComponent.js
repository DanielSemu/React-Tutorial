import React, { Component } from 'react'

class ClassComponent extends Component {
     constructor(){
        super();
        this.state={
            String:'Hello DanielS',
            monesters: []
        };
     }
     componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json()).then(users=>this.setState({monesters:users}))
     }
  render() {
    // we can Modify state only using setSate method
    return (
      <div>
        {
            this.state.monesters.map(monesters =><h1 key={monesters.id}>{monesters.name} username= {monesters.username}</h1>)
        }
        <h1>{this.state.String}</h1>
        <button onClick={()=>this.setState({String: "Hello Andrel"})}>Change State</button>
        {/* Here we are Using anonymous functions that means without funtion name  */}
      </div>
    )
  }
}
export default ClassComponent;