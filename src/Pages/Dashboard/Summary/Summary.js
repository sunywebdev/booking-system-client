import { Backdrop, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Calander from "./Calander";
import Card from "./Card";
import Chart from "./Chart";

const Summary = () => {
	const [bookings, setBookings] = useState([]);
	const [submitting, setSubmitting] = useState(true);
	useEffect(() => {
		fetch(`https://fierce-reef-90342.herokuapp.com/bookings`)
			.then((res) => res.json())
			.then((data) => {
				setBookings(data.reverse());
				setSubmitting(false);
			});
	}, []);
	const Distance = bookings.filter(
		(booking) => booking.rideType === "Distance",
	).length;
	const Hourly = bookings.filter(
		(booking) => booking.rideType === "Hourly",
	).length;
	const FlatRate = bookings.filter(
		(booking) => booking.rideType === "Flat Rate",
	).length;
	const ChauffeurServices = bookings.filter(
		(booking) => booking.rideType === "Chauffeur Services",
	).length;

	return (
		<Container>
			<Grid container spacing={2} alignItems='center' sx={{ my: 1.5 }}>
				<Grid item md={12} xs={12}>
					<Card
						bookings={bookings}
						Distance={Distance}
						Hourly={Hourly}
						FlatRate={FlatRate}
						ChauffeurServices={ChauffeurServices}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<Calander />
				</Grid>
				<Grid item md={6} xs={12}>
					<Chart
						bookings={bookings}
						Distance={Distance}
						Hourly={Hourly}
						FlatRate={FlatRate}
						ChauffeurServices={ChauffeurServices}
					/>
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

export default Summary;
