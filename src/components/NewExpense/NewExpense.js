import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import {useState} from 'react';

function NewExpense(props) {
    const [shownStatus, setShownStatus] = useState(true);
    
    const toggleFormOpening = () => {
        setShownStatus(prevStatus => {
            return !prevStatus;
        });
    }

    return (
        <div className="new-expense">
            {shownStatus ? <button onClick={toggleFormOpening} className="new-expense__button">Add new Expense</button> : <ExpenseForm handleFormShowing={toggleFormOpening} handleNewExpense={props.handleNewExpense}/>}
        </div>
    )
}

export default NewExpense;