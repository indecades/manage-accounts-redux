const initialState = { balance: 0 };

const rootReducer = (state = initialState, action) => {
	switch (
		action.type //switch statement to handle the types of actions (action.{4 different types of actions})
	) {
		case "DEPOSIT_AMOUNT": // if the case is deposit
			return {
				// return
				...state,
				balance: state.balance + action.payload, //the state of the balance will be the balance entered + the amount entered
			}; //
		case "WITHDRAW_AMOUNT": // if the case is withdraw amount
			return {
				// return
				...state,
				balance: state.balance - action.payload, // the the state of the balance will be the balance entered - the amount entered
			};
		case "ADD_INTEREST": // if the case is add interest
			return {
				// return
				...state,
				balance: state.balance + state.balance * 0.05, // the state of the balance will be the balance entered  * the interest (0.05)
			};
		case "APPLY_CHARGES": // if the case is apply charges
			return {
				// return
				...state,
				balance: state.balance - state.balance * 0.15, // the state of the balance will be the balance entered * the interest (0.15)
			};
		default:
			return state; // return the new state
	}
};

export default rootReducer;
