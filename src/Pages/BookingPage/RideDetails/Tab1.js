import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import SendIcon from "@mui/icons-material/Send";
import {
	Button,
	Container,
	FormControl,
	FormHelperText,
	Grid,
	MenuItem,
	Select,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Tab1() {
	const data = reactLocalStorage.getObject("rideDetails");
	const [dateTime, setDateTime] = React.useState(new Date(data?.time1 || ""));

	const handleChange = (newValue) => {
		setDateTime(newValue);
	};

	const [extraHour, setExtraHour] = React.useState(data?.extraTime1 || "");

	const handleExtraHourChange = (event) => {
		setExtraHour(event.target.value);
	};
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			picupLocation1: "",
			dropOffLocation1: "",
		},
	});
	React.useEffect(() => {
		reset(data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const navigate = useNavigate();
	const destination = "/choosevehicle";
	const onSubmit = ({ picupLocation1, dropOffLocation1 }) => {
		const data = {
			time1: dateTime,
			picupLocation1,
			dropOffLocation1,
			extraTime1: extraHour,
			rideType: "Distance",
			tab: 0,
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
						<Grid item md={12} xs={12}>
							<FormHelperText>PICKUP LOCATION</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='ENTER A LOCATION'
								type='standard'
								{...register("picupLocation1", { required: true })}
							/>
						</Grid>
						<Grid item md={12} xs={12}>
							<FormHelperText>DROP-OFF LOCATION</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='ENTER A LOCATION'
								type='standard'
								{...register("dropOffLocation1", { required: true })}
							/>
						</Grid>
						<Grid item md={12} xs={12}>
							<FormControl fullWidth>
								<FormHelperText sx={{ ml: 0 }}>EXTRA TIME</FormHelperText>
								<Select
									value={extraHour}
									onChange={handleExtraHourChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}>
									<MenuItem value=''>
										<em>0 HOUR(S)</em>
									</MenuItem>
									<MenuItem value={"1 HOUR"}>1 HOUR(S)</MenuItem>
									<MenuItem value={"2 HOUR"}>2 HOUR(S)</MenuItem>
									<MenuItem value={"3 HOUR"}>3 HOUR(S)</MenuItem>
									<MenuItem value={"4 HOUR"}>4 HOUR(S)</MenuItem>
									<MenuItem value={"5 HOUR"}>5 HOUR(S)</MenuItem>
								</Select>
							</FormControl>
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
