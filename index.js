import React, { Component } from 'react';
import { render } from 'react-dom';

class Dynamic extends React{
  constructor(props){
    super(props)
    this.state={
      date: Date()
    }
  }
  render(){
    console.log(this.state.date)
    return (
      <h1> {this.state.date}</h1>
      );
  }
}

render(<Dynamic />, document.getElementById('root'));
