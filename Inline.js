import React, { Component } from 'react';
import { render } from 'react-dom';

var style = {
      color: 'Red',
      fontSize: 20
    };
function Inline(){
    return <div> 
    
   <p style={style}> Have a good and productive day! </p></div>;
}
    export default Inline;