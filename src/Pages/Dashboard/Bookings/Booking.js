import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	Box,
	Button,
	CardMedia,
	Container,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Booking = () => {
	const { id } = useParams();
	const [data, setData] = useState();
	useEffect(() => {
		axios
			.get(`https://fierce-reef-90342.herokuapp.com/bookings/${id}`)
			.then((res) => {
				setData(res.data);
			});
	}, [id]);
	return (
		<div>
			<Container sx={{ py: 2 }}>
				<Grid container spacing={3}>
					<Grid item md={4} xs={12}>
						<Box sx={{ textAlign: "left", bgcolor: "#F6F6F6", p: 1.5, mb: 1 }}>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
								sx={{ mb: 2 }}>
								About
							</Typography>
							<Box>
								<Typography gutterBottom variant='body' component='div'>
									Booking For ?
								</Typography>
								<Typography gutterBottom variant='body2' component='div'>
									{data?.forWhom || "N/A"}
								</Typography>
								<Divider sx={{ my: 1.5 }} />

								{(!data?.forWhom === "Booking for myself" || data?.forWho) && (
									<>
										<Typography gutterBottom variant='body' component='div'>
											You Are ?
										</Typography>
										<Typography gutterBottom variant='body2' component='div'>
											{data?.forWho || "N/A"}
										</Typography>
										<Divider sx={{ my: 1.5 }} />
									</>
								)}
								{(!data?.forWhom === "Booking for myself" ||
									!data?.forWho === "A Person" ||
									data?.company) && (
									<>
										<Typography gutterBottom variant='body' component='div'>
											Company
										</Typography>
										<Typography gutterBottom variant='body2' component='div'>
											{data?.company || data?.reqCompany || "N/A"}
										</Typography>
										<Divider sx={{ my: 1.5 }} />
									</>
								)}
							</Box>
						</Box>
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
										{data?.firstName}
									</Typography>
								</Box>
								<Box sx={{ ml: 2 }}>
									<Typography gutterBottom variant='body' component='div'>
										Last Name
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.lastName}
									</Typography>
								</Box>
							</Box>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body' component='div'>
								Email Address
							</Typography>
							<Typography gutterBottom variant='body2' component='div'>
								{data?.userEmail}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body' component='div'>
								Phone Number
							</Typography>
							<Typography gutterBottom variant='body2' component='div'>
								{data?.phone}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body' component='div'>
								Notes
							</Typography>
							<Typography gutterBottom variant='body2' component='div'>
								{data?.comment || "N/A"}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
						</Box>
					</Grid>
					<Grid item md={4} xs={12}>
						<Box sx={{ textAlign: "left", bgcolor: "#F6F6F6", p: 1.5, mb: 2 }}>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
								sx={{ mb: 2 }}>
								Booking Info
							</Typography>

							<Typography gutterBottom variant='body' component='div'>
								Booking Time
							</Typography>
							<Typography gutterBottom variant='body2' component='div'>
								{data?.bookingTime}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body' component='div'>
								TXN
							</Typography>
							<Typography gutterBottom variant='body2' component='div'>
								{data?.txn}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
						</Box>
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
										image={data?.carPhoto1}
									/>
								</Grid>
								<Grid item md={6} xs={6}>
									<CardMedia
										sx={{ width: "100%" }}
										component='img'
										alt=''
										image={data?.carPhoto2}
									/>
								</Grid>
								<Grid item md={6} xs={6}>
									<CardMedia
										sx={{ width: "100%" }}
										component='img'
										alt=''
										image={data?.carPhoto3}
									/>
								</Grid>
							</Grid>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body' component='div'>
								Vehicle
							</Typography>
							<Typography gutterBottom variant='body2' component='div'>
								{data?.carName}
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
							{data?.rideType === "Hourly" && (
								<>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.rideType}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP LOCATION
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.picupLocation2}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										DROP-OFF LOCATION
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.dropOffLocation2}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										DURATION
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.duration2}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP DATE, TIME
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.time2}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
								</>
							)}
							{data?.rideType === "Distance" && (
								<>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.rideType}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP LOCATION
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.picupLocation1}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										DROP-OFF LOCATION
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.dropOffLocation1}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										EXTRA TIME
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.extraTime1}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP DATE, TIME
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.time1}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
								</>
							)}
							{data?.rideType === "Flat Rate" && (
								<>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.rideType}
									</Typography>

									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										SERVICE TYPE
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.transferType3}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										DURATION
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.duration3}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP DATE, TIME
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.time3}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
								</>
							)}
							{data?.rideType === "Chauffeur Services" && (
								<>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.rideType}
									</Typography>

									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										SERVICE TYPE
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.transferType4}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										DURATION
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.duration4}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP DATE, TIME
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.time4}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
								</>
							)}
							{data?.rideType === "Airport Service" && (
								<>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.rideType}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP DATE, TIME
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.time5}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP DATE, TIME
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.time5}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										PICKUP LOCATION
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.picupLocation5}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										AIRPORT
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.airport}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										AIRLINE
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.airline || "N/A"}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										FLIGHT NO
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.flightNo || "N/A"}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										TERMINAL
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.terminal || "N/A"}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										FLIGHT TIME
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.flightTime || "N/A"}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										FLIGHT STATUS
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.flightStatus || "N/A"}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
									<Typography gutterBottom variant='body' component='div'>
										ORIGIN
									</Typography>
									<Typography gutterBottom variant='body2' component='div'>
										{data?.origin || "N/A"}
									</Typography>
									<Divider sx={{ my: 1.5 }} />
								</>
							)}
							<Typography gutterBottom variant='body2' component='div'>
								<b>Passengers</b> :{" "}
								{data?.passengers === true ? data?.passengersCount : "No"}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body2' component='div'>
								<b>Luggage</b> :{" "}
								{data?.luggage === true ? data?.luggageCount : "No"}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body2' component='div'>
								<b>Child Seat</b> :{" "}
								{data?.babySeat === true ? data?.babyCount : "No"}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body2' component='div'>
								<b>Car Seat</b> :{" "}
								{data?.carSeat === true ? data?.carSeatCount : "No"}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
							<Typography gutterBottom variant='body2' component='div'>
								<b>Wheel Chair</b> :{" "}
								{data?.wheelchair === true ? data?.wheelchairCount : "No"}
							</Typography>
							<Divider sx={{ my: 1.5 }} />
						</Box>
					</Grid>
					<Grid item md={12} xs={12}>
						<Link to='/dashboard/bookings' style={{ textDecoration: "none" }}>
							<Button
								className='buttonColor'
								variant='contained'
								sx={{ py: 1.7, mt: 2 }}>
								<ArrowBackIcon sx={{ mr: 1 }} />
								Back To List
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Booking;
