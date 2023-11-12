
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const budgetLimit = 20000;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if( event.target.value > budgetLimit) {
            alert("The value cannot exceed budget upper limit £"+budgetLimit);
            return;
        }

        if ( event.target.value < totalExpenses ) {
            alert("You cannot reduce the budget below the sum of expenses £"+totalExpenses);
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;