export const depositAmount = (
	amount // parameter amount
) => ({
	type: "DEPOSIT_AMOUNT", // action type 1
	payload: amount, //amount entered
});

export const withdrawAmount = (
	amount // parameter amount
) => ({
	type: "WITHDRAW_AMOUNT", // action type 2
	payload: amount, // amount entered
});

export const addInterest = () => ({
	type: "ADD_INTEREST", // action type 3
	// no payload uses specific interest
});

export const applyCharges = () => ({
	type: "APPLY_CHARGES", // action type 4
	// no payload uses specific interest
});
