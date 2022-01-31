import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import SendIcon from "@mui/icons-material/Send";
import { Button, Container, FormHelperText, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Tab5() {
	const data = reactLocalStorage.getObject("rideDetails");
	const [dateTime, setValue] = React.useState(new Date(data?.time5) || "");

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			picupLocation5: "",
			airport: "",
			airline: "",
			flightNo: "",
			terminal: "",
			flightTime: "",
			flightStatus: "",
			origin: "",
		},
	});
	React.useEffect(() => {
		reset(data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const navigate = useNavigate();
	const destination = "/choosevehicle";
	const onSubmit = ({
		picupLocation5,
		airport,
		airline,
		flightNo,
		terminal,
		flightTime,
		flightStatus,
		origin,
	}) => {
		const data = {
			time5: dateTime,
			picupLocation5,
			airport,
			airline,
			flightNo,
			terminal,
			flightTime,
			flightStatus,
			origin,
			rideType: "Airport Service",
			tab: 4,
		};
		reactLocalStorage.setObject("rideDetails", data);
		navigate(destination);
	};
	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<Grid container spacing={2}>
						<Grid item md={6} xs={12}>
							<FormHelperText>PICKUP DATE</FormHelperText>
							<DesktopDatePicker
								inputFormat='MM/dd/yyyy'
								value={dateTime}
								onChange={handleChange}
								renderInput={(params) => (
									<TextField required fullWidth {...params} />
								)}
							/>
						</Grid>

						<Grid item md={6} xs={12}>
							<FormHelperText>PICKUP TIME</FormHelperText>
							<TimePicker
								value={dateTime}
								onChange={handleChange}
								renderInput={(params) => <TextField fullWidth {...params} />}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormHelperText>PICKUP LOCATION</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='ENTER A LOCATION'
								type='standard'
								{...register("picupLocation5", { required: true })}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormHelperText>AIRPORT</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='AIRPORT'
								type='standard'
								{...register("airport", { required: true })}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormHelperText>AIRLINE</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='AIRLINE'
								type='standard'
								{...register("airline")}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormHelperText>FLIGHT NO</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='FLIGHT NO'
								type='standard'
								{...register("flightNo")}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormHelperText>TERMINAL</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='TERMINAL'
								type='standard'
								{...register("terminal")}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormHelperText>FLIGHT TIME</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='FLIGHT TIME. Ex: 05:20 pm'
								type='standard'
								{...register("flightTime")}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormHelperText>FLIGHT STATUS</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='FLIGHT STATUS'
								type='standard'
								{...register("flightStatus")}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormHelperText>ORIGIN</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='ORIGIN'
								type='standard'
								{...register("origin")}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Link to='/' style={{ textDecoration: "none" }}>
								<Button
									className='buttonColor'
									variant='contained'
									sx={{ width: "100%", py: 1.7 }}>
									<ArrowBackIcon sx={{ mr: 1 }} />
									Back
								</Button>
							</Link>
						</Grid>
						<Grid item md={6} xs={12}>
							<Button
								type='submit'
								className='buttonColor'
								sx={{ width: "100%", py: 1.7 }}
								variant='contained'
								endIcon={<SendIcon />}>
								CHOOSE A VEHICLE
							</Button>
						</Grid>
					</Grid>
				</LocalizationProvider>
			</form>
		</Container>
	);
}
