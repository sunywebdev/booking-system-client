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
import { useNavigate } from "react-router-dom";

export default function Tab2() {
	const data = reactLocalStorage.getObject("rideDetails");
	const [dateTime, setValue] = React.useState(new Date(data?.time2) || "");

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	const [duration, setDuration] = React.useState(data?.duration2 || "");

	const handleExtraHourChange = (event) => {
		setDuration(event.target.value);
	};
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			picupLocation2: "",
			dropOffLocation2: "",
		},
	});
	React.useEffect(() => {
		reset(data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
		const navigate = useNavigate();
		const destination = "/choosevehicle";
	const onSubmit = ({ picupLocation2, dropOffLocation2 }) => {
		const data = {
			time2: dateTime,
			picupLocation2,
			dropOffLocation2,
			duration2: duration,
			rideType: "Hourly",
			tab: 1,
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
							<FormHelperText>PICKUP LOCATION</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='ENTER A LOCATION'
								type='standard'
								{...register("picupLocation2", { required: true })}
							/>
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
							<FormHelperText>DROP-OFF LOCATION</FormHelperText>
							<TextField
								fullWidth
								id='filled-search'
								placeholder='ENTER A LOCATION'
								type='standard'
								{...register("dropOffLocation2", { required: true })}
							/>
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
