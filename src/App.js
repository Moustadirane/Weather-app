import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput : " "
    }
    //May need to bind to make "this" work
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
  }

  // handleSubmit(event) => {
  //   return (
  //     console.log("hello");
  //   )
  // };

  render(){
    return (
      <div className="App">
        <header className="App-header">
            Hello World. My name is Mousta Taenchiki. Here is a simple weather app.
            <h1 span className= "topStyle"> Look up weather for any location below:  </h1>

            <form onSubmit = {this.handleSubmit}>
              <label>
                <h2>Input Zipcodes:</h2>
                <input type = "text" placeholder = "search zipcode" name = "textBox" />

              </label>
              <input type = "submit" value = "Submit" />

            </form>


        </header>


      </div>
    );
  }

}

export default App;
