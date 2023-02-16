import React, { Component } from 'react'
import withCurrency from './withCurrency';

class Currency extends Component {
  render(){
    return (
      <div>Current currency: {this.props.money}</div>
    );
    }    
}

export default withCurrency(Currency);