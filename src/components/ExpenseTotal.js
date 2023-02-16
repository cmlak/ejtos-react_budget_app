import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import withCurrency from '../components/withCurrency';

const ExpenseTotal = (props) => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {props.money} {totalExpenses}</span>
        </div>
    );
};

export default withCurrency(ExpenseTotal);
