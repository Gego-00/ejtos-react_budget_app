import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { totalExpenses, selectedCurrency } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {`${selectedCurrency} ${totalExpenses}`}</span>
        </div>
    );
};
export default ExpenseTotal; 