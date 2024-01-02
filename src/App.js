
import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
// import Greet from './components/Greet';
// import Hello from './components/Hello';
//  import Greet1 from './components/Greet';
// import Message from './components/Message';
// import Counter from './components/Counter';
function App() {
  // const name="Danielw"
  return (
    <div className="App">
    {/* <First/>
    <Second />
    <Third/>
    <Greet name="Daniel" heroname="Superman" />
     */}
    {/* <Hello name=" dfrde" fname="Semhjgu" >
      <button>Button</button>
    </Hello>
    <Hello name=" Ash" fname="Rise" >
      <h1>Hello from Children props</h1>
    </Hello>

    <Welcome name="Daniel"/>*/}
    <Welcome name=" Class1" fName="fname_Class1"></Welcome> 
{/* <Message/>
<Counter/> */}
    </div>
  );
}

// class First extends React.Component {  
//   render() {  
//      return (  
//         <div>  
//            <h1>JavaTpoint</h1>  
//         </div>  
//      );  
//   }  
// }  
// function Second(props){
//   return <h1>Hello from second</h1>
// }

// function Third(){
//   return <h1>Hello I am from the Third</h1>
// }
export default App;
