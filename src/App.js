import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      character : { }
    }
  }

  // function handleClick(){
  //   console.log("I was clicked");
  //
  // };

  render(){
    return (
      <div className="App">
        <header className="App-header">
            Hello World. My name is Mousta. Here is a simple weather app.
            <h1 span className= "topStyle"> Look up any zipcode below.  </h1>
            <p> Click me to look up weather.</p>
            <button onClick= {this.handleClick}> Look me up</button>
        </header>


      </div>
    );
  }

}

export default App;
