
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import withCurrency from '../components/withCurrency';

const BudgetTwo = (props) => {
    const { budget } = useContext(AppContext);
    
    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
                Budget: {props.money}
            <AppContext.Consumer>
                {props => {
                  return <input 
                  type="number" 
                  value={budget} 
                  step={10} 
                  name="budget" 
                  onChange={(e) => props.dispatch({ 
                      type: 'SET_BUDGET', payload: e.target.value }) } 
                      />}}
                
            </AppContext.Consumer>
        </div>
    );
};

export default withCurrency(BudgetTwo);
