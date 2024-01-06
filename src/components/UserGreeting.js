import React, { Component } from 'react'
/// CONDITIONAL RENDERING 
class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn :false
      }
    }
    // is else statements are not work inside the jsx
  render() {
    // return this.state.isLoggedIn && <div>Welcome Vish </div>
    //if the is logged in is true then the div part will be displayed 
    // THE THE THIRD METHOD 
    return this.state.isLoggedIn?
    (<div>Welocome Vishwash</div>):
    (<div>Welcome Guest</div>)
  
    // let message
    // if (this.state.isLoggedIn){
    //     message=<div>Welcome vishwas</div>
    // }
    // else{
    // message =<div>Welcome Guest</div>
    // }

    // return <div>{message}</div>
    //the second way for conditional rendering
    // if (this.state.isLoggedIn){
    // return(
    //     <div>
    //         Welcome Vishwas
    //     </div>
    // )
    // }
    // else{
    //     return(
    //     <div>
    //        Welcome Guest
    //     </div>
    // )
    // }
    // return (
    //   <div>
    //     <div> Welcome vishwas</div>
    //     <div> </div>
        
    //   </div>
    // )
  }
}

export default UserGreeting
