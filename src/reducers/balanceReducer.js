const actions = {
	ADD_BALANCE: 'balanceAddBalance',
	SUBTRACT_BALANCE: 'subBalance',
};

const balanceReducer = (state = {value: 10}, action) => {
	switch(action.type) {
		case actions.ADD_BALANCE: {
			return {
				...state,
				value: state.value + action.payload
			};
			break;
		}
		case actions.SUBTRACT_BALANCE: {
			return {
				...state,
				value: state.value - action.payload
			};
			break;
		}
		default: {
			console.log(`action ${action}`);
			return state;
		}
	}
};


export {
	actions,
	balanceReducer,
};