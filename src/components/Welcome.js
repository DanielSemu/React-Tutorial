import React, {Component} from "react";
//  this is class component
//  props are are immutable 
class Welcome extends Component{
    render(){
        //destructuring the props
        const {name, fName} =this.props
        return <div>
            
           {/* <h1> Class Component {this.props.name}   {this.props.fName}</h1> */}
        
           <h1> Class Component {name}   {fName}</h1>
              
        
        </div>
    }
}


export default Welcome;