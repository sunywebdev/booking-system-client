import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../context/useAuth";
import { Backdrop, CircularProgress } from "@mui/material";

export default function ResetPass() {
	const [load, setLoad] = React.useState();
	const { auth, error, resetPassword } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	console.log(error);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		setLoad(true);
		resetPassword(auth, data?.email, navigate, location, setLoad);
	};
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Avatar sx={{ m: 1 }} className='buttonColor'>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Reset Password
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 3 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						type='email'
						autoComplete='email'
						autoFocus
						{...register("email", { required: true })}
					/>
					<Button
						type='submit'
						className='buttonColor'
						fullWidth
						variant='contained'
						sx={{
							my: 2,
						}}>
						Reset Password
					</Button>
					<Grid container justifyContent='center'>
						<Grid item>
							<Link to='/login' variant='body2'>
								{"Remember Password? Login Now"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</Box>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={load}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
}
