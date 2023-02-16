import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import withCurrency from '../components/withCurrency';

const Remaining = (props) => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {props.money} {budget - totalExpenses}</span>
        </div>
    );
};

export default withCurrency(Remaining);
