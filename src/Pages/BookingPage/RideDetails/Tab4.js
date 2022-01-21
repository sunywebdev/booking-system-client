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

export default function Tab4() {
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
	const { handleSubmit } = useForm();

	const navigate = useNavigate();
	const destination = "/choosevehicle";
	const onSubmit = () => {
		const data = {
			time4: dateTime,
			transferType4: type,
			duration4: duration,
			rideType: "Chauffeur Services",
			tab: 3,
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
								renderInput={(params) => (
									<TextField required fullWidth {...params} />
								)}
							/>
						</Grid>

						<Grid item md={12} xs={12}>
							<FormControl fullWidth>
								<FormHelperText sx={{ ml: 0 }}>SERVICE TYPE</FormHelperText>
								<Select
									required
									value={type}
									onChange={handleTypeChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}>
									<MenuItem value=''>
										<em>Select Type</em>
									</MenuItem>
									<MenuItem value={"Corporate"}>Corporate</MenuItem>
									<MenuItem value={"Driver by Day"}>Driver by Day</MenuItem>
									<MenuItem value={"Wedding"}>Wedding</MenuItem>
									<MenuItem value={"Funeral"}>Funeral</MenuItem>
									<MenuItem value={"Cruise"}>Cruise</MenuItem>
									<MenuItem value={"Prom"}>Prom</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item md={12} xs={12}>
							<FormControl fullWidth>
								<FormHelperText sx={{ ml: 0 }}>
									DURATION (IN HOURS)
								</FormHelperText>
								<Select
									required
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
