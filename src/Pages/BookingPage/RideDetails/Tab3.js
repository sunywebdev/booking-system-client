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
	Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";
import { useNavigate } from "react-router-dom";

export default function Tab3() {
	const data = reactLocalStorage.getObject("rideDetails");
	const [dateTime, setDateTime] = React.useState(new Date(data?.time3) || "");

	const handleChange = (newValue) => {
		setDateTime(newValue);
	};

	const [duration, setDuration] = React.useState(data?.duration3 || "");
	const handleExtraHourChange = (event) => {
		setDuration(event.target.value);
	};
	const [type, setType] = React.useState(data?.transferType3 || "");
	const handleTypeChange = (event) => {
		setType(event.target.value);
	};
	const [location, setLocation] = React.useState(data?.picupLocation3 || "");
	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};
	const { handleSubmit } = useForm();

	const navigate = useNavigate();
	const destination = "/choosevehicle";
	const onSubmit = () => {
		const data = {
			time3: dateTime,
			picupLocation3: location,
			transferType3: type,
			duration3: duration,
			rideType: "Flat Rate",
			tab: 2,
		};
		reactLocalStorage.setObject("rideDetails", data);
		navigate(destination);
	};
	return (
		<Container>
			<Typography variant='h4' component='div' sx={{ mb: 2.5 }}>
				RIDE DETAILS
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<Grid container spacing={2}>
						<Grid item md={6} xs={12}>
							<FormHelperText>PICKUP DATE</FormHelperText>
							<DesktopDatePicker
								inputFormat='MM/dd/yyyy'
								value={dateTime}
								onChange={handleChange}
								renderInput={(params) => <TextField fullWidth {...params} />}
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
							<FormControl fullWidth>
								<FormHelperText sx={{ ml: 0 }}>ROUTE</FormHelperText>
								<Select
									value={location}
									onChange={handleLocationChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}>
									<MenuItem value=''>
										<em>Select Location</em>
									</MenuItem>
									<MenuItem value={"Location 1"}>Location 1</MenuItem>
									<MenuItem value={"Location 2"}>Location 2</MenuItem>
									<MenuItem value={"Location 3"}>Location 3</MenuItem>
									<MenuItem value={"Location 4"}>Location 4</MenuItem>
									<MenuItem value={"Location 5"}>Location 5</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item md={12} xs={12}>
							<FormControl fullWidth>
								<FormHelperText sx={{ ml: 0 }}>TRANSFER TYPE</FormHelperText>
								<Select
									value={type}
									onChange={handleTypeChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}>
									<MenuItem value=''>
										<em>Select Type</em>
									</MenuItem>
									<MenuItem value={"One Way"}>One Way</MenuItem>
									<MenuItem value={"Return"}>Return</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item md={12} xs={12}>
							<FormControl fullWidth>
								<FormHelperText sx={{ ml: 0 }}>
									DURATION (IN HOURS)
								</FormHelperText>
								<Select
									value={duration}
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
						<Grid item md={12} xs={12}>
							<Button
								type='submit'
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
