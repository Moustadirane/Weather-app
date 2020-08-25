import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

{/*
const api = {
  key : "0ea75e6f0e926b981777f0fb08e78978",
  base: ""
}

*/}


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      //bendingStyle: "Air",
      //userInput : ""
      key : "0ea75e6f0e926b981777f0fb08e78978",
      base: "https://openweathermap.org/api"
    }
    //May need to bind to make "this" work
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);

    this.setState({
      //bendingStyle: event.target.value
      //userInput: event.target.value
      key: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    const {bendingStyle} = this.state;
    const {key} = this.state;
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();


    let timeOfDay
    let ampm

    if (hours < 12){
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 18){
      timeOfDay = "afternoon"
    } else{
      timeOfDay = "evening"
    }

    if (hours < 12){
      ampm = "a.m."
    }else{
      ampm = "p.m."
    }

    const showDate = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"]
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"];

      let dayOfWeek = days[d.getDay()];
      let today = d.getDate();
      let currMonth = months[d.getMonth()];
      let year = d.getFullYear();

      return `${dayOfWeek} ${today} ${currMonth} ${year}`
    }

    return (
      <div className="App">
        <header className="App-header">
            Hi World. My name is Mousta Taenchiki. Here is a simple weather app.
          <h1 span className= "topStyle"> Look up weather for any location below:  </h1>
          {/*<h1>My bending style is: {bendingStyle} </h1>*/}

          <h3> Good {timeOfDay} </h3>
          <div className = "location-box">
            <div className = "location"> New York City </div>
            <div className = "date"> {showDate(new Date())} </div>
            <div className = "time"> {hours%12}:{mins}:{secs} {ampm}</div>
          </div>

          {/*<img src = "LionGrass.jpg" alt = "LionGrass"/>*/}
          {/*<img src="https://picsum.photos/200/300" alt = "randomINternetImg" />*/}
            <form onSubmit = {this.handleSubmit}>
              <label>
                <input type = "text" placeholder = "search location" className = "search-box" value = {bendingStyle}
                  name = "textBox" onChange = {this.handleInputChange} />
              </label>
              <input type = "submit" value = "Submit" />
            </form>


            <p><a href="#"> Jump back to top. </a></p>

        </header>


      </div>
    );
  }

}

export default App;
