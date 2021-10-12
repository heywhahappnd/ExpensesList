import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState(''); 
    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState('');
    const handleAmountChange = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');
    const handleDateChange = (event) => {
        setEnteredDate(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            id: Math.random() * 10,
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.handleNewExpense(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
        props.handleFormShowing();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new_expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={handleTitleChange}/>
                </div>
                <div className="new_expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={handleAmountChange} />
                </div>
                <div className="new_expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={handleDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.handleFormShowing} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;