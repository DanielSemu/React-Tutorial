// new functional component snnipet is rfce
import React from 'react'

function FunctionClick() {
    // in java script we can define another function with in a function
   function clickHandler (){
    console.log("Button clicked")
   }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
   {/* // event handlwer is a function not a function call we dont have to add parentesis   */}
    </div>
  )
}

export default FunctionClick
