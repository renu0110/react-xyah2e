import React,{Component} from 'react';
import  propTypes from 'prop-types';
export default class Card extends Component
{
   render()
   {
     return (
       <div>
      <h2>  {this.props.name}</h2>
      <h3> {this.props.email}</h3>
     
       </div>

     );
   }
}
