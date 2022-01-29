import {
	Backdrop,
	Button,
	CircularProgress,
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
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";

const CompanyList = () => {
	const [submitting, setSubmitting] = useState(false);
	const [deleted, setDeleted] = useState(false);
	const [companyList, setCompanyList] = useState([]);
	useEffect(() => {
		fetch(`https://fierce-reef-90342.herokuapp.com/companylist`)
			.then((res) => res.json())
			.then((data) => setCompanyList(data.reverse()));
	}, [deleted, submitting]);
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
					.delete(`https://fierce-reef-90342.herokuapp.com/companylist/${id}`)
					.then(function (response) {
						Swal.fire("Deleted!", "That Company has been deleted.", "success");
						setDeleted(true);
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		});
	};

	const { register, handleSubmit, reset } = useForm();

	const onSubmit = ({ name }) => {
		const data = {
			time: new Date().toLocaleString(),
			name,
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-reef-90342.herokuapp.com/companylist`, data)
			.then(function (response) {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "New Company Added Successfully",
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

	let count = 1;

	return (
		<Container sx={{ mt: 2, minHeight: "100vh" }}>
			<Grid container spacing={2} sx={{ mb: 3 }}>
				<Grid item md={6} xs={12} sx={{ mx: "auto" }}>
					<Typography
						sx={{ mb: 3, fontWeight: "bold" }}
						variant='h4'
						component='div'
						gutterBottom>
						Add New Company
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							required
							sx={{ width: "100%", mb: 2 }}
							id='"outlined-multiline-flexible'
							label='Company Name'
							{...register("name", { required: true })}
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
							ADD COMPANY
						</Button>
					</form>
				</Grid>
			</Grid>
			<Grid>
				<Typography
					sx={{ mb: 3, fontWeight: "bold" }}
					variant='h4'
					component='div'
					gutterBottom>
					Company List
				</Typography>
				<Paper
					className='container'
					sx={{ overflow: "auto", maxHeight: "80vh", maxWidth: "90vw" }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead sx={{ th: { fontWeight: "bold" } }}>
							<TableRow>
								<TableCell align='left'>No</TableCell>
								<TableCell align='left'>Added Time</TableCell>
								<TableCell align='left'>Name</TableCell>
								<TableCell align='center'>Action</TableCell>
							</TableRow>
						</TableHead>
						{companyList?.length > 0 ? (
							<TableBody sx={{ td: { py: 1 } }}>
								{companyList.map((company) => (
									<TableRow
										key={company?._id}
										sx={{
											"&:last-child td, &:last-child th": { border: 0 },
										}}>
										<TableCell align='left'>{count++}</TableCell>
										<TableCell align='left'>{company?.time}</TableCell>
										<TableCell align='left'>{company?.name}</TableCell>
										<TableCell align='center'>
											<Button
												className='buttonColor'
												onClick={() => handleDelete(company?._id)}
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
								</TableRow>
							</TableHead>
						)}
					</Table>
				</Paper>
			</Grid>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={submitting || !companyList?.length}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
};

export default CompanyList;
