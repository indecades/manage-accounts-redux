import React, { useState } from "react"; // import useState
import "./App.css";
import { useDispatch, useSelector } from "react-redux"; // import useDispatch and useSelector
import {
	depositAmount,
	withdrawAmount,
	addInterest,
	applyCharges,
} from "./store/actions.js"; // import action types
const App = () => {
	const [amount, setAmount] = useState(""); // useState states
	const balance = useSelector((state) => state.balance); // balance = new state balance
	const dispatch = useDispatch();

	const handleDeposit = () => {
		dispatch(depositAmount(Number(amount))); // depositAmount action type (number amount input by the user)
		setAmount(""); // set new amount
	};

	const handleWithdraw = () => {
		dispatch(withdrawAmount(Number(amount))); // withdrawAmount action type (number amount input by the user)
		setAmount(""); // set new amount
	};

	const handleInterest = () => {
		dispatch(addInterest()); //set new amount using dispatch && addInterest action type
	};

	const handleCharges = () => {
		dispatch(applyCharges()); // set new amount using dispatch && applyCharges action type
	};

	return (
		<div>
			<h1>Balance, R{balance}</h1>
			<input
				type="number"
				placeholder="Enter amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<button onClick={handleDeposit}>Deposit</button>
			<button onClick={handleWithdraw}>Withdraw</button>
			<button onClick={handleInterest}>Add Interest</button>
			<button onClick={handleCharges}>Charges</button>
		</div>
	);
};
// the value entered in the input will be targeted with the useState setAmount state value
// {balance} = if user enters nothing the balance will be 0 it will update if the user uses any actions
// buttons: if the user clicks any of the buttons the onclick event functions will run
export default App;
