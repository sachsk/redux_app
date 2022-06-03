import {combineReducers} from "redux";
import {balanceReducer} from "./balanceReducer";

console.log("allReducer");
const allReducers = combineReducers({
	balance: balanceReducer
})

export default allReducers;