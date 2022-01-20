import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";

const Summary = () => {
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
			{rideDetails.rideType === "Hourly" && (
				<>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.rideType}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						PICKUP LOCATION
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.picupLocation2}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						DROP-OFF LOCATION
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.dropOffLocation2}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						DURATION
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.duration2}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						PICKUP DATE, TIME
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.time2}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
				</>
			)}
			{rideDetails.rideType === "Distance" && (
				<>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.rideType}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						PICKUP LOCATION
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.picupLocation1}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						DROP-OFF LOCATION
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.dropOffLocation1}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						EXTRA TIME
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.extraTime1}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						PICKUP DATE, TIME
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.time1}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
				</>
			)}
			{rideDetails.rideType === "Flat Rate" && (
				<>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.rideType}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						ROUTE
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.picupLocation3}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						TRANSFER TYPE
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.transferType3}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						DURATION
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.duration3}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
					<Typography gutterBottom variant='body' component='div'>
						PICKUP DATE, TIME
					</Typography>
					<Typography gutterBottom variant='body2' component='div'>
						{rideDetails.time1}
					</Typography>
					<Divider sx={{ my: 1.5 }} />
				</>
			)}
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
