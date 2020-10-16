import React, { Component } from 'react';
import Stays from './Stays.js';
import Search from './Search.js';
import stays from './stays.json';
import ModalImage from "react-basic-modal-image"
import './App.css';

export default class App extends Component {
  state = {
    number: 10,
    location: ""
  }
  select = (number, location) => {
    console.log("çalışıyor: " + number + " location: " + location)
    this.setState({
      number: number,
      location: location
    })
  }

  render() {
    return (
      <div className="App">
        <ModalImage except={["App-logo","test4 test"]} alt="test1" />        <Search select={this.select} ></Search>
        <div className="name"><p>Stays in Finland</p><p>{stays.length}+ stays</p></div>
        <div>
          {
            stays.map((message) => {
              if (this.state.number <= message.maxGuests && this.state.location.toLowerCase() == message.city.toLowerCase() || this.state.location == "") {
                return (<Stays stay={message} />)
              }
            })
          }
        </div>
      </div>
    );
  }
}

