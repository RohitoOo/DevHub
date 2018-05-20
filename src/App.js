import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Me from './Me';
import Counter from './Counter';


// function App({data}){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={data.image} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to Reactions Mr. {data.firstName}</h1>
//       </header>
//       <p className="App-intro">
//         Journey of React begins....
//       </p>
//       <div>
//
//           <Me data={data} />
//
//       </div>
//
//     </div>
//
//   )
// }

class App extends Component {


      constructor(props) {
          super(props);
          this.state = {
            showCounter : true
          }};


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.props.data.image} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reactions Mr. {this.props.data.firstName}</h1>
        </header>
        <p className="App-intro">
          Journey of React begins....
        </p>
        <div>
        <Counter />


        </div>
        <div>

            <Me data={this.props.data} />

        </div>

      </div>

    )
  }
}


export default App;
