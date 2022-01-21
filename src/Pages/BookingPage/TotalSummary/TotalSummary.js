import {
	Backdrop,
	Box,
	Button,
	CardMedia,
	CircularProgress,
	Container,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import Step3 from "../Steps/Step3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Swal from "sweetalert2";

const TotalSummary = () => {
	const [submitting, setSubmitting] = React.useState(false);
	const vehicles = reactLocalStorage.getObject("vehicles");
	const rideDetails = reactLocalStorage.getObject("rideDetails");
	const contactDetails = reactLocalStorage.getObject("contactDetails");
	const extraOpions = reactLocalStorage.getObject("importantOpions");
	const navigate = useNavigate();
	const destination = "/confirm";
	const confirm = () => {
		const randomNumber = Math.floor(Math.random() * 90000) + 10000;
		const data = {
			txn: "EL" + randomNumber,
			bookingTime: new Date().toLocaleString(),
			...vehicles,
			...rideDetails,
			...contactDetails,
			...extraOpions,
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-reef-90342.herokuapp.com/bookings`, data)
			.then(function (response) {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "Booking Request Sent Successfully",
					showConfirmButton: false,
					timer: 1500,
				}).then(function () {
					navigate(destination);
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container sx={{ mb: 2 }}>
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
							Notes
						</Typography>
						<Typography gutterBottom variant='body2' component='div'>
							{contactDetails.comment || "N/A"}
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
						<Grid container spacing={2} sx={{ alignItems: "center" }}>
							<Grid item md={12} xs={12}>
								<CardMedia
									sx={{ width: "100%" }}
									component='img'
									alt=''
									image={vehicles?.carPhoto1}
								/>
							</Grid>
							<Grid item md={6} xs={6}>
								<CardMedia
									sx={{ width: "100%" }}
									component='img'
									alt=''
									image={vehicles?.carPhoto2}
								/>
							</Grid>
							<Grid item md={6} xs={6}>
								<CardMedia
									sx={{ width: "100%" }}
									component='img'
									alt=''
									image={vehicles?.carPhoto3}
								/>
							</Grid>
						</Grid>
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
									SERVICE TYPE
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
									{rideDetails.time3}
								</Typography>
								<Divider sx={{ my: 1.5 }} />
							</>
						)}
						{rideDetails.rideType === "Chauffeur Services" && (
							<>
								<Typography gutterBottom variant='body2' component='div'>
									{rideDetails.rideType}
								</Typography>

								<Divider sx={{ my: 1.5 }} />
								<Typography gutterBottom variant='body' component='div'>
									SERVICE TYPE
								</Typography>
								<Typography gutterBottom variant='body2' component='div'>
									{rideDetails.transferType4}
								</Typography>
								<Divider sx={{ my: 1.5 }} />
								<Typography gutterBottom variant='body' component='div'>
									DURATION
								</Typography>
								<Typography gutterBottom variant='body2' component='div'>
									{rideDetails.duration4}
								</Typography>
								<Divider sx={{ my: 1.5 }} />
								<Typography gutterBottom variant='body' component='div'>
									PICKUP DATE, TIME
								</Typography>
								<Typography gutterBottom variant='body2' component='div'>
									{rideDetails.time4}
								</Typography>
								<Divider sx={{ my: 1.5 }} />
							</>
						)}
						<Typography gutterBottom variant='body2' component='div'>
							<b>Passengers</b> :{" "}
							{extraOpions.passengers === true
								? extraOpions.passengersCount
								: "No"}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body2' component='div'>
							<b>Luggage</b> :{" "}
							{extraOpions.luggage === true ? extraOpions.luggageCount : "No"}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body2' component='div'>
							<b>Child Seat</b> :{" "}
							{extraOpions.babySeat === true ? extraOpions.babyCount : "No"}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body2' component='div'>
							<b>Car Seat</b> :{" "}
							{extraOpions.carSeat === true ? extraOpions.carSeatCount : "No"}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
						<Typography gutterBottom variant='body2' component='div'>
							<b>Wheel Chair</b> :{" "}
							{extraOpions.wheelchair === true
								? extraOpions.wheelchairCount
								: "No"}
						</Typography>
						<Divider sx={{ my: 1.5 }} />
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={{ md: 2, xs: 0 }}>
				<Grid item md={6} xs={12}>
					<Link to='/contactdetails' style={{ textDecoration: "none" }}>
						<Button
							className='buttonColor'
							variant='contained'
							sx={{ width: "100%", py: 1.7, mt: 2 }}>
							<ArrowBackIcon sx={{ mr: 1 }} />
							Back
						</Button>
					</Link>
				</Grid>
				<Grid item md={6} xs={12}>
					<Button
						className='buttonColor'
						onClick={confirm}
						sx={{ width: "100%", py: 1.7, mt: 2 }}
						variant='contained'
						endIcon={<SendIcon />}>
						Confirm Order
					</Button>
				</Grid>
			</Grid>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
};

export default TotalSummary;
