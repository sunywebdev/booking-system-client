import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ContactForm = () => {
	const data = reactLocalStorage.getObject("contactDetails");
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			userEmail: "",
			phone: "",
			comment: "",
		},
	});
	const navigate = useNavigate();
	const destination = "/totalsummary";
	const onSubmit = ({ firstName, lastName, userEmail, phone, comment }) => {
		const data = {
			firstName,
			lastName,
			userEmail,
			phone,
			comment,
		};
		reactLocalStorage.setObject("contactDetails", data);
		navigate(destination);
	};
	React.useEffect(() => {
		reset(data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container>
			<Box
				className='headline'
				sx={{
					width: "100%",
					py: 1.5,
					my: 2,
				}}>
				<Typography variant='body' component='div'>
					Contact Details
				</Typography>
			</Box>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={2}>
					<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
						<Grid container spacing={2}>
							<Grid item md={6} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='firstName'
									placeholder='Enter Your First Name*'
									{...register("firstName", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='lastName'
									placeholder='Enter Your Last Name*'
									{...register("lastName", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									name='UserEmail'
									type='email'
									placeholder='Enter Your Email*'
									{...register("userEmail", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									required
									sx={{ width: "100%" }}
									id='outlined-basic'
									placeholder='Phone Number*'
									name='phone'
									{...register("phone", { required: true })}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									sx={{ width: "100%" }}
									id='"outlined-multiline-flexible'
									placeholder='Your Comment'
									name='Comment'
									multiline
									rows={7.3}
									{...register("comment")}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<Grid container spacing={{ md: 2, xs: 0 }}>
									<Grid item md={6} xs={12}>
										<Link
											to='/choosevehicle'
											style={{ textDecoration: "none" }}>
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
											type='submit'
											sx={{ width: "100%", py: 1.7, mt: 2 }}
											variant='contained'
											endIcon={<SendIcon />}>
											BOOKING SUMMARY
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default ContactForm;
