import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      character : { }
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
            Hello World. My name is Mousta. Here is a simple weather app.
            <h1 span className= "topStyle"> Look up any zipcode below.  </h1>
        </header>


      </div>
    );
  }

}

export default App;
