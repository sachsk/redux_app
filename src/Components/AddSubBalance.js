import Container from "@mui/material/Container";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AddSubBalance = ({value, addBalance, subBalance}) => {
	return (
		<Container>
			<Box style={{marginTop: "10%"}}>
				<Button variant="contained" onClick={() => {
					addBalance(10)
				}}>Add</Button>
				<Typography style={{margin: "2% 2% 2% 2%"}}>Amount {value}</Typography>
				<Button variant="contained"
				        onClick={() => {
					        subBalance(10)
				        }}
				>Sub</Button>
			</Box>

		</Container>
	)
};

export default AddSubBalance;