import "./App.css";

import React, { Component } from "react";

//import Welcome from './components/Welcome';
// import Greet from './components/Greet';
// import Hello from './components/Hello';
//  import Greet1 from './components/Greet';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBing from './components/EventBing';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import ClassComponent from './components/ClassComponent';
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

// function App() {
//   // const name="Danielw"
//   return (
//     <div className="App">
//     {/* <First/>
//     <Second />
//     <Third/>
//     <Greet name="Daniel" heroname="Superman" />
//      */}
//     {/* <Hello name=" dfrde" fname="Semhjgu" >
//       <button>Button</button>
//     </Hello>
//     <Hello name=" Ash" fname="Rise" >
//       <h1>Hello from Children props</h1>
//     </Hello>

//     <Welcome name="Daniel"/>*/}
//     {/* <Welcome name=" Class1" fName="fname_Class1"></Welcome>  */}
// {/* <Message/>*/}

//   {/* <FunctionClick/>
//   <ClassClick/> */}
//   {/* <EventBing/>
//   <ParentComponent/> */}

//   {/* <UserGreeting/>
//   <NameList/>
//   <ClassComponent/>*/}
//   <CardList >
//     <h1>Daniel Semu</h1>
//     <h2>Ashenafi Debela</h2>
//     <h3>Dawit Tesfaye</h3>
//   </CardList>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      // String:'Hello DanielS',
      monesters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monesters: users }));
  }
  render() {
    // we can Modify state only using setSate method
    const { monesters, searchField } = this.state; //this is called destructuring
    //and the above code is the same as
    // const monestes=this.state.monesters;
    // const searchField=this.state.searchField;
    const filteredMonesters = monesters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
             placeholder="search monesters"
             handlechange={e => 
              this.setState({ searchField: e.target.value })}
        />
        <CardList monesters={filteredMonesters} />

        {/*<h1>{this.state.String}</h1>
        <button onClick={()=>this.setState({String: "Hello Andrel"})}>Change State</button>
         Here we are Using anonymous functions that means without funtion name  */}
      </div>
    );
  }
}
export default App;

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
// export default App;
