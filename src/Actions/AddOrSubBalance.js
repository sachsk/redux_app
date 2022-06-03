import {actions} from '../reducers/balanceReducer';

const addBalance = dispatch => amount => {
	dispatch({
		type: actions.ADD_BALANCE,
		payload: amount
	});
}

const subBalance = (dispatch) => amount => {
	dispatch({
		type: actions.SUBTRACT_BALANCE,
		payload: amount
	});
}

export {
	addBalance,
	subBalance,
}