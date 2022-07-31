import {connect} from "react-redux";
import AddSubBalance from "./AddSubBalance";
import {addBalance, subBalance} from "../Actions/AddOrSubBalance";


export default connect(
	({balance: {value}}) => ({value}),
	(dispatch) => (
		{
		addBalance: addBalance(dispatch),
		subBalance: subBalance(dispatch)}
	)
)(AddSubBalance);
//