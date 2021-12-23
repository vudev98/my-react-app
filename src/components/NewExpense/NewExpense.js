import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredData) => {
		const expenseData = {
			...enteredData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
		</div>
	);
};

export default NewExpense;
