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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

const Car = () => {
	const { id } = useParams();
	const [submitting, setSubmitting] = useState(false);
	const [imageLink1, setImageLink1] = useState(null);
	const [imageLink2, setImageLink2] = useState(null);
	const [imageLink3, setImageLink3] = useState(null);
	const [data, setData] = useState();
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			carId: "",
			carName: "",
			carInfo: "",
			carLuggage: "",
			carPassenger: "",
		},
	});
	useEffect(() => {
		axios
			.get(`https://fierce-reef-90342.herokuapp.com/cars/${id}`)
			.then((res) => {
				reset(res.data);
				setData(res.data);
			});
	}, [id, reset]);

	const onSubmit = ({ carName, carInfo, carLuggage, carPassenger }) => {
		const datas = {
			carName,
			carInfo,
			carLuggage,
			carPassenger,
			carPhoto1: imageLink1 || data?.carPhoto1,
			carPhoto2: imageLink2 || data?.carPhoto2,
			carPhoto3: imageLink3 || data?.carPhoto3,
		};
		setSubmitting(true);
		axios
			.put(`https://fierce-reef-90342.herokuapp.com/cars/${data?._id}`, datas)
			.then(function (response) {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "Car Updated Successfully",
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

	const [loading1, setLoading1] = useState(false);
	const uploadImage1 = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "car-booking-website-photos");
		setLoading1(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink1(file.secure_url);
		setLoading1(false);
	};

	const [loading2, setLoading2] = useState(false);
	const uploadImage2 = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "car-booking-website-photos");
		setLoading2(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink2(file.secure_url);
		setLoading2(false);
	};

	const [loading3, setLoading3] = useState(false);
	const uploadImage3 = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "car-booking-website-photos");
		setLoading3(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink3(file.secure_url);
		setLoading3(false);
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
					Update Car
				</Typography>

				<Grid container spacing={2}>
					<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Grid container spacing={2} sx={{ mb: 4 }}>
								<Grid item md={4} xs={12} sx={{ mx: "auto" }}>
									<Box
										display='flex'
										flexDirection='column'
										alignItems='center'
										sx={{ mb: 1, mx: "auto" }}>
										<label
											className='bgColor'
											htmlFor='icon-button-file1'
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												margin: "0 9px",
												borderRadius: 5,
											}}>
											<Input
												accept='image/*'
												id='icon-button-file1'
												type='file'
												onChange={uploadImage1}
											/>
											<Typography
												sx={{ my: 2, ml: 2, color: "white" }}
												variant='h6'
												component='div'
												gutterBottom>
												Car Photo 1
											</Typography>
											<IconButton
												color='primary'
												aria-label='upload picture'
												component='span'>
												<DirectionsCarIcon
													fontSize='large'
													sx={{ fontWeight: "bold", color: "white" }}
												/>
											</IconButton>
										</label>

										{loading1 ? (
											<Box sx={{ my: 2 }}>
												<CircularProgress className='color-theme' />
											</Box>
										) : (
											<img
												src={imageLink1 || data?.carPhoto1}
												style={{
													width: "200px",
													margin: "5px 0",
												}}
												alt=''
											/>
										)}
									</Box>
								</Grid>
								<Grid item md={4} xs={12} sx={{ mx: "auto" }}>
									<Box
										display='flex'
										flexDirection='column'
										alignItems='center'
										sx={{ mb: 1, mx: "auto" }}>
										<label
											className='bgColor'
											htmlFor='icon-button-file2'
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												margin: "0 9px",
												borderRadius: 5,
											}}>
											<Input
												accept='image/*'
												id='icon-button-file2'
												type='file'
												onChange={uploadImage2}
											/>
											<Typography
												sx={{ my: 2, ml: 2, color: "white" }}
												variant='h6'
												component='div'
												gutterBottom>
												Car Photo 2
											</Typography>
											<IconButton
												color='primary'
												aria-label='upload picture'
												component='span'>
												<DirectionsCarIcon
													fontSize='large'
													sx={{ fontWeight: "bold", color: "white" }}
												/>
											</IconButton>
										</label>

										{loading2 ? (
											<Box sx={{ my: 2 }}>
												<CircularProgress className='color-theme' />
											</Box>
										) : (
											<img
												src={imageLink2 || data?.carPhoto2}
												style={{
													width: "200px",
													margin: "5px 0",
												}}
												alt=''
											/>
										)}
									</Box>
								</Grid>
								<Grid item md={4} xs={12} sx={{ mx: "auto" }}>
									<Box
										display='flex'
										flexDirection='column'
										alignItems='center'
										sx={{ mb: 1, mx: "auto" }}>
										<label
											className='bgColor'
											htmlFor='icon-button-file3'
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												margin: "0 9px",
												borderRadius: 5,
											}}>
											<Input
												accept='image/*'
												id='icon-button-file3'
												type='file'
												onChange={uploadImage3}
											/>
											<Typography
												sx={{ my: 2, ml: 2, color: "white" }}
												variant='h6'
												component='div'
												gutterBottom>
												Car Photo 3
											</Typography>
											<IconButton
												color='primary'
												aria-label='upload picture'
												component='span'>
												<DirectionsCarIcon
													fontSize='large'
													sx={{ fontWeight: "bold", color: "white" }}
												/>
											</IconButton>
										</label>

										{loading3 ? (
											<Box sx={{ my: 2 }}>
												<CircularProgress className='color-theme' />
											</Box>
										) : (
											<img
												src={imageLink3 || data?.carPhoto3}
												style={{
													width: "200px",
													margin: "5px 0",
												}}
												alt=''
											/>
										)}
									</Box>
								</Grid>
							</Grid>

							<>
								<TextField
									required
									InputLabelProps={{
										shrink: true,
									}}
									sx={{ width: "100%", mb: 2 }}
									id='outlined-multiline-flexible'
									label='Car ID'
									value={data?.carId}
								/>
								<TextField
									required
									InputLabelProps={{
										shrink: true,
									}}
									sx={{ width: "100%", mb: 2 }}
									id='outlined-multiline-flexible'
									label='Car Name'
									{...register("carName", { required: true })}
								/>
								<TextField
									required
									InputLabelProps={{
										shrink: true,
									}}
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Car Info'
									multiline
									rows={4}
									{...register("carInfo", { required: true })}
								/>
								<TextField
									required
									InputLabelProps={{
										shrink: true,
									}}
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Max Passenger'
									{...register("carPassenger", { required: true })}
								/>
								<TextField
									required
									InputLabelProps={{
										shrink: true,
									}}
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
									UPDATE CAR
								</Button>
							</>
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

export default Car;
