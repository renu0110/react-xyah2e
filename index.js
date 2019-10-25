import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Card from './Card';
import Clock from './Clock';
import Inline from './Inline';

class App extends Component {
  
  constructor()
  {
    //declare state at the class level
 this.state={person:[{name:'Joy',email:'joy@gmail.com'},
 {name:'Joyson',email:'joyson@gmail.com'}
 ] , 
 somestate:'Somedata'
 }
  }
 // EC6 --no event binding required
   switchStateHandler=()=>
   {
     console.log('button clicked');
     // change the state
     this.setState( {person:[{name:'Joy',email:'newJoy@gmail.com'},{name:'Joyson',email:'js@gmail.com'}]} );
     console.log(this.state.person[0].name);
   }
  render() {
    return (
      <div>
          <Inline />
         <Clock/>
        <Card name={this.state.person[0].name} email={this.state.person[0].email}   />
          <Card name={this.state.person[1].name} email={this.state.person[1].email}   />
          <button onClick={this.switchStateHandler}> Change state</button>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
