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

            <form>
              <label>
                <h2>Input Zipcodes:</h2>
                <input type = "text" name = "name" />
              </label>
              <input type = "submit" value = "Submit" />
            </form>


        </header>


      </div>
    );
  }

}

export default App;
