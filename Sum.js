import React, { Component } from 'react';


function add(props){
var add1 = parseInt(props.add1);
var add2 = parseInt(props.add2);
var res = add1 + add2;

return res;
}

export default add;


