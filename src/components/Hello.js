import React from "react";

const Hello =(props)=> {
    console.log(props)
    return(
        <div>
            <h1>Hello   {props.name}  {props.fname}</h1>
            {props.children}
        </div>
    )
}

export default Hello;


// the above code is called JSX

// const Hello =() => {
//     return  React.createElement('div',null, React.createElement('h1', null,"Hello With out JSX") )
// }

// export default Hello;