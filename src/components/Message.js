import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Visitor',
            name:"Daniel"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thank You for Subscribing"
        })
    }
    unSudcribe(){
        this.setState({
            message:'Welcome Visitor'
        })
    }
    render(){
        return(
            <div>
            <h1>
                {this.state.message}
                {this.state.name}
            </h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            <button onClick={()=> this.unSudcribe()}>Unsubscribe</button>
            </div>
        )
    }
}

export default Message;