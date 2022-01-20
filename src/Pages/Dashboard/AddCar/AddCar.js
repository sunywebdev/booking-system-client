import {
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	CircularProgress,
	IconButton,
	Backdrop,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import styled from "@emotion/styled";

const AddCar = () => {
	const [submitting, setSubmitting] = useState(false);
	const [imageLink2, setImageLink2] = useState(null);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = ({ carName, carInfo, carLuggage, carPassenger }) => {
		const data = {
			carId: Math.floor(Math.random() * 90000) + 10000,
			carName,
			carInfo,
			carLuggage,
			carPassenger,
			carPhoto: imageLink2,
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-reef-90342.herokuapp.com/cars`, data)
			.then(function (response) {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "New Car Added Successfully",
					showConfirmButton: false,
					timer: 1500,
				}).then(function () {
					reset();
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const [loading, setLoading] = useState(false);
	const uploadImage = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "DBC-Comment");
		setLoading(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink2(file.secure_url);
		setLoading(false);
	};
	const Input = styled("input")({
		display: "none",
	});
	return (
		<Container sx={{ mt: { md: 0, xs: 7 } }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: { md: "100vh", xs: "90vh" } }}>
				<Typography
					sx={{ mb: 4, fontWeight: 900 }}
					variant='h3'
					component='div'
					gutterBottom
					data-aos='fade-right'>
					ADD NEW CAR
				</Typography>

				<Grid container spacing={2}>
					<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box
								display='flex'
								flexDirection='column'
								alignItems='center'
								sx={{ mt: 3, mb: 1, mx: "auto" }}>
								<label
									className='bgColor'
									htmlFor='icon-button-file'
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										margin: "0 9px",
										borderRadius: 5,
									}}>
									<Input
										accept='image/*'
										id='icon-button-file'
										type='file'
										onChange={uploadImage}
									/>
									<Typography
										sx={{ m: 2, color: "white" }}
										variant='h6'
										component='div'
										gutterBottom>
										Upload Car Photo*
									</Typography>
									<IconButton
										sx={{ color: "white" }}
										aria-label='upload picture'
										component='span'>
										<DirectionsCarIcon
											fontSize='large'
											sx={{ fontWeight: "bold" }}
										/>
									</IconButton>
								</label>

								{loading ? (
									<Box sx={{ my: 2 }}>
										<CircularProgress className='textColor' />
									</Box>
								) : (
									<img src={imageLink2} style={{ width: "300px" }} alt='' />
								)}
							</Box>
							{imageLink2 && (
								<>
									<TextField
										required
										sx={{ width: "100%", mb: 2 }}
										id='outlined-multiline-flexible'
										label='Car Name'
										{...register("carName", { required: true })}
									/>
									<TextField
										required
										sx={{ width: "100%", mb: 2 }}
										id='"outlined-multiline-flexible'
										label='Car Info'
										multiline
										rows={4}
										{...register("carInfo", { required: true })}
									/>
									<TextField
										required
										sx={{ width: "100%", mb: 2 }}
										id='"outlined-multiline-flexible'
										label='Max Passenger'
										{...register("carPassenger", { required: true })}
									/>
									<TextField
										required
										sx={{ width: "100%", mb: 2 }}
										id='"outlined-multiline-flexible'
										label='Max Luggage'
										{...register("carLuggage", { required: true })}
									/>
									<Button
										type='submit'
										variant='contained'
										className='buttonColor'
										sx={{
											width: "100%",
											mb: 2,
											px: 3,
											fontWeight: "bold",
											border: "2px solid",
											borderRadius: "25px",
										}}>
										ADD CAR
									</Button>
								</>
							)}
						</form>
					</Grid>
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

export default AddCar;
