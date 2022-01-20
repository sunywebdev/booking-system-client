import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Grid, Typography, Button } from "@mui/material";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";

const Confirm = () => {
	reactLocalStorage.clear();
	return (
		<div>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: { md: "100vh", xs: "90vh" } }}>
				<CheckCircleOutlineIcon sx={{ fontSize: 90 }} />
				<Typography variant='h4' component='div'>
					Thank you for your order
				</Typography>
				<Typography variant='h5' component='div'>
					Soon you will get a call from us
				</Typography>
				<Grid item md={12} xs={12}>
					<Link to='/' style={{ textDecoration: "none" }}>
						<Button
							className='buttonColor'
							variant='contained'
							sx={{ py: 1, mt: 2 }}>
							OKAY
						</Button>
					</Link>
				</Grid>
			</Grid>
		</div>
	);
};

export default Confirm;
