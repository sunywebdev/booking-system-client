import {
	Box,
	Button,
	Container,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { CSVLink } from "react-csv";

const Bookings = () => {
	const [deleted, setDeleted] = useState(false);
	const [bookings, setBookings] = useState([]);
	const [search, setSearch] = React.useState("");
	const [newList, setNewList] = React.useState([]);
	const handleChange = (event) => {
		setSearch(event.target.value);
	};
	useEffect(() => {
		const searchs = bookings.filter(
			(booking) =>
				booking.firstName.toLowerCase().includes(search.toLowerCase()) ||
				booking.lastName.toLowerCase().includes(search.toLowerCase()) ||
				booking.txn.toLowerCase().includes(search.toLowerCase()) ||
				booking.phone.toLowerCase().includes(search.toLowerCase()),
		);
		setNewList(searchs);
	}, [bookings, search]);

	useEffect(() => {
		fetch(`https://fierce-reef-90342.herokuapp.com/bookings`)
			.then((res) => res.json())
			.then((data) => {
				setBookings(data.reverse());
				setNewList(data.reverse());
			});
	}, [deleted]);
	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`https://fierce-reef-90342.herokuapp.com/bookings/${id}`)
					.then(function (response) {
						Swal.fire("Deleted!", "That booking has been deleted.", "success");
						setDeleted(true);
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		});
	};
	let count = 1;
	const headers = [
		{ label: "First Name", key: "firstName" },
		{ label: "Last Name", key: "lastName" },
		{ label: "Email", key: "userEmail" },
		{ label: "Phone Number", key: "phone" },
		{ label: "Notes", key: "comment" },
		{ label: "Booking Time", key: "bookingTime" },
		{ label: "TXN", key: "txn" },
		{ label: "Vehicle", key: "carName" },
		{ label: "Ride Type", key: "rideType" },
		{ label: "Picup Location", key: "picupLocation2" },
		{ label: "Drop-Off Location", key: "dropOffLocation2" },
		{ label: "Duration", key: "duration2" },
		{ label: "Picup Time", key: "time2" },
		{ label: "Ride Type", key: "rideType" },
		{ label: "Picup Location", key: "picupLocation1" },
		{ label: "Drop-Off Location", key: "dropOffLocation1" },
		{ label: "Extra Time", key: "extraTime1" },
		{ label: "Picup Time", key: "time1" },
		{ label: "Ride Type", key: "rideType" },
		{ label: "Service Type", key: "transferType3" },
		{ label: "Duration", key: "duration3" },
		{ label: "Picup Time", key: "time3" },
		{ label: "Ride Type", key: "rideType" },
		{ label: "Duration", key: "duration4" },
		{ label: "Picup Time", key: "time4" },
		{ label: "Passengers", key: "passengers" },
		{ label: "Passengers Count", key: "passengersCount" },
		{ label: "Luggage", key: "luggage" },
		{ label: "Luggage Count", key: "luggageCount" },
		{ label: "Baby Seat", key: "babySeat" },
		{ label: "Baby Seat Count", key: "babyCount" },
		{ label: "Car Seat", key: "carSeat" },
		{ label: "Car Seat Count", key: "carSeatCount" },
		{ label: "Wheel Chair", key: "wheelchair" },
		{ label: "Wheel Chair Count", key: "wheelchairCount" },
	];

	return (
		<Container sx={{ mt: 2, minHeight: "100vh" }}>
			<Grid>
				<Typography
					sx={{ mb: 3, fontWeight: "bold" }}
					variant='h4'
					component='div'
					gutterBottom>
					Booking Requests
				</Typography>
				<Box sx={{ my: 2 }}>
					<Button
						className='buttonColor'
						sx={{
							fontWeight: "bold",
							border: "2px solid",
							backgroundColor: "transparent",
							borderRadius: "25px",
							m: 0.5,
						}}
						variant='contained'>
						<CSVLink
							data={bookings}
							headers={headers}
							className='buttonColor'
							style={{
								textDecoration: "none",
								color: "white",
							}}>
							Download CSV File
						</CSVLink>
					</Button>
				</Box>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12} sx={{ mx: "auto" }}>
						<TextField
							sx={{ mb: 2, width: "100%" }}
							id='outlined-name'
							placeholder='Search by Name / TXN / Phone'
							value={search}
							onChange={handleChange}
						/>
					</Grid>
				</Grid>
				<Paper
					className='container'
					sx={{ overflow: "auto", maxHeight: "80vh", maxWidth: "90vw" }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead sx={{ th: { fontWeight: "bold" } }}>
							<TableRow>
								<TableCell align='left'>No</TableCell>
								<TableCell align='left'>Name</TableCell>
								<TableCell align='left'>TXN</TableCell>
								<TableCell align='left'>Booking Time</TableCell>
								<TableCell align='center'>Action</TableCell>
							</TableRow>
						</TableHead>
						{newList?.length > 0 ? (
							<TableBody sx={{ td: { py: 1 } }}>
								{newList.map((booking) => (
									<TableRow
										key={booking?._id}
										sx={{
											"&:last-child td, &:last-child th": { border: 0 },
										}}>
										<TableCell align='left'>{count++}</TableCell>
										<TableCell align='left'>
											{booking?.firstName + " " + booking?.lastName}
										</TableCell>
										<TableCell align='left'>{booking?.txn}</TableCell>
										<TableCell align='left'>{booking?.bookingTime}</TableCell>

										<TableCell align='center'>
											<Link
												to={`/dashboard/bookings/${booking?._id}`}
												style={{ textDecoration: "none" }}>
												<Button
													className='buttonColor'
													sx={{
														fontWeight: "bold",
														border: "2px solid",
														backgroundColor: "transparent",
														borderRadius: "25px",
														m: 0.5,
													}}
													variant='contained'>
													<RemoveRedEyeIcon />
												</Button>
											</Link>

											<Button
												className='buttonColor'
												onClick={() => handleDelete(booking?._id)}
												sx={{
													fontWeight: "bold",
													border: "2px solid",
													backgroundColor: "transparent",
													borderRadius: "25px",
													m: 0.5,
												}}
												variant='contained'>
												<DeleteIcon />
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						) : (
							<TableHead sx={{ th: { fontWeight: "bold" } }}>
								<TableRow>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
								</TableRow>
							</TableHead>
						)}
					</Table>
				</Paper>
			</Grid>
			{!bookings && <BeatLoader size={10} />}
		</Container>
	);
};

export default Bookings;
