import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, selectedCurrency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{`${selectedCurrency} ${props.cost}`}</td>
        <td><button type="button" className="btn btn-success rounded-circle btn-sm" style={{fontSize: "28px", fontWeight: "800", marginLeft: "90px", alignItems:"center", textAlign:"center"}} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button type="button" className="btn btn-danger rounded-circle btn-sm" style={{fontSize: "28px", fontWeight: "800", marginLeft: "90px" }} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete style={{marginLeft: "50px"}} size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
