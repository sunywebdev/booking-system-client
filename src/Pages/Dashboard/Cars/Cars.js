import {
	Button,
	Container,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const Cars = () => {
	const [deleted, setDeleted] = useState(false);
	const [cars, setCars] = useState([]);
	useEffect(() => {
		fetch(`https://fierce-reef-90342.herokuapp.com/cars`)
			.then((res) => res.json())
			.then((data) => setCars(data.reverse()));
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
					.delete(`https://fierce-reef-90342.herokuapp.com/cars/${id}`)
					.then(function (response) {
						Swal.fire("Deleted!", "That car has been deleted.", "success");
						setDeleted(true);
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		});
	};
	let count = 1;
	return (
		<Container sx={{ mt: 2, minHeight: "100vh" }}>
			<Grid>
				<Typography
					sx={{ mb: 3, fontWeight: "bold" }}
					variant='h4'
					component='div'
					gutterBottom>
					Vehicles
				</Typography>
				<Paper
					className='container'
					sx={{ overflow: "auto", maxHeight: "80vh", maxWidth: "90vw" }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead sx={{ th: { fontWeight: "bold" } }}>
							<TableRow>
								<TableCell align='left'>No</TableCell>
								<TableCell align='left'>Photo</TableCell>
								<TableCell align='left'>Name</TableCell>
								<TableCell align='left'>Max Passenger</TableCell>
								<TableCell align='left'>Max Luggage</TableCell>
								<TableCell align='left'>Details</TableCell>
								<TableCell align='center'>Action</TableCell>
							</TableRow>
						</TableHead>
						{cars?.length > 0 ? (
							<TableBody sx={{ td: { py: 1 } }}>
								{cars.map((car) => (
									<TableRow
										key={car?._id}
										sx={{
											"&:last-child td, &:last-child th": { border: 0 },
										}}>
										<TableCell align='left'>{count++}</TableCell>
										<TableCell align='left'>
											<img
												src={car?.carPhoto1}
												alt=''
												width='120px'
												height='60px'
											/>
										</TableCell>
										<TableCell align='left'>{car?.carName}</TableCell>
										<TableCell align='left'>{car?.carPassenger}</TableCell>
										<TableCell align='left'>{car?.carLuggage}</TableCell>
										<TableCell align='left'>{car?.carInfo}</TableCell>
										<TableCell align='center'>
											

											<Button
												className='buttonColor'
												onClick={() => handleDelete(car?._id)}
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
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
								</TableRow>
							</TableHead>
						)}
					</Table>
				</Paper>
			</Grid>
		</Container>
	);
};

export default Cars;
