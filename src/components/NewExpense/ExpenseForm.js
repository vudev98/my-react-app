import React, { useState } from 'react';
import './ExpenseForm.css';
const Expenseform = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnterdAmount] = useState('');
	const [enteredDate, setEnterdDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enterdDate: '',
	// 	enteredAmount: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });

		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
	};
	const amountChangerHandler = (event) => {
		setEnterdAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });
	};
	const dateChangerHandler = (event) => {
		setEnterdDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enterdDate: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log('Expense Form');
		console.log(expenseData);

		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnterdAmount('');
		setEnterdDate('');
	};

	return (
		<form action="" onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input
						id="title"
						value={enteredTitle}
						type="text"
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						id="amount"
						type="number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangerHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						id="date"
						type="date"
						value={enteredDate}
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangerHandler}
					/>
				</div>
				{/* <div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input id="title" type="date" />
				</div> */}
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default Expenseform;
