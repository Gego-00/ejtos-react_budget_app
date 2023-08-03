import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { budget, totalExpenses, selectedCurrency } = useContext(AppContext);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {`${selectedCurrency} ${budget - totalExpenses}`}</span>
        </div>
    );
};
export default Remaining;
