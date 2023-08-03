import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, selectedCurrency } = useContext(AppContext)
    const [ value, setValue ] = useState(budget);
    const handleEvent = event => {
        setValue(event.target.value)
    }

    return (
        <div className='alert alert-secondary'>
            <label>Budget: {selectedCurrency}</label>
            <input
                type='number'
                value={value}
                min={totalExpenses}
                max='20000'
                onChange={handleEvent}
                step='10'
            />
        </div>
    );
};
export default Budget;
