import {
	Box,
	Button,
	CardMedia,
	Container,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import Step3 from "../Steps/Step3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";

const TotalSummary = () => {
	const vehicles = reactLocalStorage.getObject("vehicles");
	const rideDetails = reactLocalStorage.getObject("rideDetails");
	const contactDetails = reactLocalStorage.getObject("contactDetails");
	const confirm = () => {
		console.log(vehicles);
		console.log(rideDetails);
		console.log(contactDetails);
	};

	return (
		<Container>
			<Box sx={{ my: 2.5 }}>
				<Step3 />
			</Box>
			<Grid container spacing={3}>
				<Grid item md={4} xs={12}>
					<Box sx={{ textAlign: "left", bgcolor: "#F6F6F6", p: 1.5 }}>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{ mb: 2 }}>
							Conatct And Billing Info
						</Typography>
						<Box sx={{ display: "flex" }}>
							<Box>
								<Typography gutterBottom variant='body' component='div'>
									First Name
								</Typography>
								<Typography gutterBottom variant='body2' component='div'>
									{contactDetails.firstName}
								</Typography>
							</Box>
							<Box sx={{ ml: 2 }}>
								<Typography gutterBottom variant='body' component='div'>
									Last Name
								</Typography>
								<Typography gutterBottom variant='body2' component='div'>
									{contactDetails.lastName}
								</Typography>
							</Box>
						</Box>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body' component='div'>
							Email Address
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{contactDetails.userEmail}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body' component='div'>
							Phone Number
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{contactDetails.phone}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body' component='div'>
							PICKUP DATE, TIME
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{rideDetails.time1 || rideDetails.time2 || rideDetails.time3}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body' component='div'>
							VEHICLE
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{vehicles.carName}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
					</Box>
				</Grid>
				<Grid item md={4} xs={12}>
					<Box sx={{ textAlign: "left", bgcolor: "#F6F6F6", p: 1.5 }}>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{ mb: 2 }}>
							Vehicle Info
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<CardMedia
							sx={{ width: "100%" }}
							component='img'
							image={vehicles.carPhoto}
							alt='Paella dish'
						/>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body' component='div'>
							Vehicle
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{vehicles.carName}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
					</Box>
				</Grid>
				<Grid item md={4} xs={12}>
					<Box sx={{ textAlign: "left", bgcolor: "#F6F6F6", p: 1.5 }}>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{ mb: 2 }}>
							Ride details
						</Typography>
						<Typography gutterBottom variant='body' component='div'>
							SERVICE TYPE
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{rideDetails.rideType}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body' component='div'>
							PICKUP LOCATION
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{rideDetails.picupLocation1 ||
								rideDetails.picupLocation2 ||
								rideDetails.picupLocation3}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body' component='div'>
							PICKUP DATE, TIME
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{rideDetails.time1 || rideDetails.time2 || rideDetails.time3}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item md={6} xs={5}>
					<Link to='/contactdetails' style={{ textDecoration: "none" }}>
						<Button variant='contained' sx={{ width: "100%", py: 1.7, mt: 2 }}>
							<ArrowBackIcon sx={{ mr: 1 }} />
							Back
						</Button>
					</Link>
				</Grid>
				<Grid item md={6} xs={5}>
					<Button
						onClick={confirm}
						sx={{ width: "100%", py: 1.7, mt: 2 }}
						variant='contained'
						endIcon={<SendIcon />}>
						Confirm Order
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default TotalSummary;
