import React from "react";

// function Greet(){
//     return <h1>Hello Vishwas</h1>


// }

//esx arrow function
//destructering the props in the paramaters
// const Greet = ({name, heroname}) =>{
//     return(
//      <h1>Hello {name} a.k.a {heroname}</h1>
//     )
//     }

// destructuring in the function body
const Greet = (props) =>{
    const {name, heroname} =props
    return(
     <h1>Hello {name} a.k.a {heroname}</h1>
    )
    }

export default Greet 
