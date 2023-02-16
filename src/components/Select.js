
import React, { Component } from 'react'

import withCurrency from './withCurrency'

class Select extends Component {
    render(){
        return (
     
        <div>
            <label>Currency</label>
            <select value={this.props.money} onChange={this.props.handleCurrency}>
                    <option value="$">Dollar</option>
                    <option value="£">Pound</option>
                    <option value="€">Euro</option>
                    <option value="₹">Rupee</option>
            </select>
        </div>
 
        );
    }    
}

export default withCurrency(Select);
