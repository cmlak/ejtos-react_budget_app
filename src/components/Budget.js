import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import withCurrency from '../components/withCurrency';

const Budget = (props) => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {props.money} {budget}</span>
        </div>
    );
};

export default withCurrency(Budget);
