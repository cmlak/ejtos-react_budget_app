import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Budget = (props) => {
    const { budget } = useContext(AppContext);
    
    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}

            <AppContext.Consumer>
                {props => {
                  return <input type="number" value={budget} step={10} name="budget" onChange={(e) => props.dispatch({ type: 'SET_BUDGET', payload: e.target.value }) } />
                }}
            </AppContext.Consumer>
        </div>
    );
};

export default Budget;
