import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";

const Summary = () => {
	const vehicles = reactLocalStorage.getObject("vehicles");
	const rideDetails = reactLocalStorage.getObject("rideDetails");

	return (
		<Container
			style={{
				textAlign: "left",
				backgroundColor: "#F6F6F6",
				position: "sticky",
				top: 20,
			}}>
			<Typography gutterBottom variant='h4' component='div' sx={{ mb: 2 }}>
				Summary
			</Typography>
			<Typography gutterBottom variant='h6' component='div'>
				SERVICE TYPE
			</Typography>
			<Typography gutterBottom variant='body2' component='div'>
				{rideDetails.rideType}
			</Typography>
			<Divider sx={{ my: 2}} />
			<Typography gutterBottom variant='h6' component='div'>
				PICKUP LOCATION
			</Typography>
			<Typography gutterBottom variant='body2' component='div'>
				{rideDetails.picupLocation1 ||
					rideDetails.picupLocation2 ||
					rideDetails.picupLocation3}
			</Typography>
			<Divider sx={{ my: 2}} />
			<Typography gutterBottom variant='h6' component='div'>
				PICKUP DATE, TIME
			</Typography>
			<Typography gutterBottom variant='body2' component='div'>
				{rideDetails.time1 || rideDetails.time2 || rideDetails.time3}
			</Typography>
			<Divider sx={{ my: 2}} />
			<Typography gutterBottom variant='h6' component='div'>
				VEHICLE
			</Typography>
			<Typography gutterBottom variant='body2' component='div'>
				{vehicles.carName}
			</Typography>
			<Divider sx={{ my: 2}} />
			{/* <Box sx={{ py: 2 }}>
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableBody>
							<TableRow
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component='th' scope='row'>
									<b>Selected vehicle</b>
								</TableCell>
								<TableCell align='right'>$ 100</TableCell>
							</TableRow>
							<TableRow
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component='th' scope='row'>
									<b>Total</b>
								</TableCell>
								<TableCell align='right'>$ 100</TableCell>
							</TableRow>
							<TableRow
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component='th' scope='row'>
									<b>To Pay</b> (30% Deposit)
								</TableCell>
								<TableCell align='right'>$ 30</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Box> */}
		</Container>
	);
};

export default Summary;
