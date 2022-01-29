import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import {
	Button,
	ButtonGroup,
	Divider,
	Grid,
	ListItemButton,
	ListItemIcon,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import { Link, useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { reactLocalStorage } from "reactjs-localstorage";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ExtraOptions = () => {
	const savedData = reactLocalStorage.getObject("importantOpions");
	const [passengersCount, setPassengersCount] = React.useState(
		savedData.passengersCount || 1,
	);
	const [passengers, setPassengers] = React.useState(
		savedData.passengers || true,
	);
	const passengers1 = (event) => {
		setPassengers(event.target.checked);
	};

	const [luggageCount, setLuggageCount] = React.useState(
		savedData.luggageCount || 0,
	);
	const [luggage, setLuggage] = React.useState(savedData.luggage || false);
	const luggage1 = (event) => {
		setLuggage(event.target.checked);
	};

	const [wheelchairCount, setWheelchairCount] = React.useState(
		savedData.wheelchairCount || 0,
	);
	const [wheelchair, setWheelchair] = React.useState(
		savedData.wheelchair || false,
	);
	const wheelchair1 = (event) => {
		setWheelchair(event.target.checked);
	};

	const [babyCount, setBabyCount] = React.useState(savedData.babyCount || 0);
	const [babySeat, setBabySeat] = React.useState(savedData.babySeat || false);
	const babySeat1 = (event) => {
		setBabySeat(event.target.checked);
	};

	const [carSeatCount, setcarSeatCount] = React.useState(
		savedData.carSeatCount || 0,
	);
	const [carSeat, setCarSeat] = React.useState(savedData.carSeat || false);
	const carSeat1 = (event) => {
		setCarSeat(event.target.checked);
	};

	const navigate = useNavigate();
	const destination = "/contactdetails";

	const saveAndGo = () => {
		const data = {
			passengers,
			passengersCount,
			luggage,
			luggageCount,
			wheelchair,
			wheelchairCount,
			babySeat,
			babyCount,
			carSeat,
			carSeatCount,
		};
		reactLocalStorage.setObject("importantOpions", data);
		navigate(destination);
	};

	return (
		<div className='importantOptions'>
			<ListItemButton
				button
				disableRipple
				disableTouchRipple
				disablefocusribble='true'>
				<Grid container spacing={2} sx={{ alignItems: "center" }}>
					<Grid item md={6} sm={4} xs={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								textAlign: "left",
							}}>
							<Typography variant='h6'>Total Luggage</Typography>
						</Box>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ButtonGroup>
							<Button
								sx={{ color: "black" }}
								aria-label='reduce'
								onClick={() => {
									setLuggageCount(Math.max(luggageCount - 1, 0));
								}}>
								<RemoveIcon fontSize='small' />
							</Button>
							<Button sx={{ color: "black" }} variant='outlined'>
								{" "}
								{luggageCount}
							</Button>
							<Button
								sx={{ color: "black" }}
								aria-label='increase'
								onClick={() => {
									setLuggageCount(luggageCount + 1);
								}}>
								<AddIcon fontSize='small' />
							</Button>
						</ButtonGroup>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ListItemIcon>
							<Checkbox
								icon={
									<Button
										style={{ backgroundColor: "transparent" }}
										sx={{
											px: 2,
											py: 1,
											bgcolor: "#EAECEE",
											color: "black",
											fontWeight: "bold",
											border: "1px solid",
										}}
										variant='contained'>
										Select
									</Button>
								}
								checkedIcon={
									<Button
										className='activeButtonColor'
										sx={{ px: 2, py: 1 }}
										variant='contained'>
										<CheckIcon sx={{ mr: 0.7 }} /> Select
									</Button>
								}
								checked={luggage}
								onChange={luggage1}
							/>
						</ListItemIcon>
					</Grid>
				</Grid>
			</ListItemButton>
			<Divider sx={{ my: 1.5 }} />
			<ListItemButton
				button
				disableRipple
				disableTouchRipple
				disablefocusribble='true'>
				<Grid container spacing={2} sx={{ alignItems: "center" }}>
					<Grid item md={6} sm={4} xs={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								textAlign: "left",
							}}>
							<Typography variant='h6'>Total Passengers</Typography>
						</Box>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ButtonGroup>
							<Button
								sx={{ color: "black" }}
								aria-label='reduce'
								onClick={() => {
									setPassengersCount(Math.max(passengersCount - 1, 0));
								}}>
								<RemoveIcon fontSize='small' />
							</Button>
							<Button sx={{ color: "black" }} variant='outlined'>
								{" "}
								{passengersCount}
							</Button>
							<Button
								sx={{ color: "black" }}
								aria-label='increase'
								onClick={() => {
									setPassengersCount(passengersCount + 1);
								}}>
								<AddIcon fontSize='small' />
							</Button>
						</ButtonGroup>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ListItemIcon>
							<Checkbox
								icon={
									<Button
										style={{ backgroundColor: "transparent" }}
										sx={{
											px: 2,
											py: 1,
											bgcolor: "#EAECEE",
											color: "black",
											fontWeight: "bold",
											border: "1px solid",
										}}
										variant='contained'>
										Select
									</Button>
								}
								checkedIcon={
									<Button
										className='activeButtonColor'
										sx={{ px: 2, py: 1 }}
										variant='contained'>
										<CheckIcon sx={{ mr: 0.7 }} /> Select
									</Button>
								}
								checked={passengers}
								onChange={passengers1}
							/>
						</ListItemIcon>
					</Grid>
				</Grid>
			</ListItemButton>
			<Divider sx={{ my: 1.5 }} />
			<ListItemButton
				button
				disableRipple
				disableTouchRipple
				disablefocusribble='true'>
				<Grid container spacing={2} sx={{ alignItems: "center" }}>
					<Grid item md={6} sm={4} xs={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								textAlign: "left",
							}}>
							<Typography variant='h6'>Child Seat</Typography>
						</Box>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ButtonGroup>
							<Button
								sx={{ color: "black" }}
								aria-label='reduce'
								onClick={() => {
									setBabyCount(Math.max(babyCount - 1, 0));
								}}>
								<RemoveIcon fontSize='small' />
							</Button>
							<Button sx={{ color: "black" }} variant='outlined'>
								{" "}
								{babyCount}
							</Button>
							<Button
								sx={{ color: "black" }}
								aria-label='increase'
								onClick={() => {
									setBabyCount(babyCount + 1);
								}}>
								<AddIcon fontSize='small' />
							</Button>
						</ButtonGroup>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ListItemIcon>
							<Checkbox
								icon={
									<Button
										style={{ backgroundColor: "transparent" }}
										sx={{
											px: 2,
											py: 1,
											bgcolor: "#EAECEE",
											color: "black",
											fontWeight: "bold",
											border: "1px solid",
										}}
										variant='contained'>
										Select
									</Button>
								}
								checkedIcon={
									<Button
										className='activeButtonColor'
										sx={{ px: 2, py: 1 }}
										variant='contained'>
										<CheckIcon sx={{ mr: 0.7 }} /> Select
									</Button>
								}
								checked={babySeat}
								onChange={babySeat1}
							/>
						</ListItemIcon>
					</Grid>
				</Grid>
			</ListItemButton>
			<Divider sx={{ my: 1.5 }} />
			<ListItemButton
				button
				disableRipple
				disableTouchRipple
				disablefocusribble='true'>
				<Grid container spacing={2} sx={{ alignItems: "center" }}>
					<Grid item md={6} sm={4} xs={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								textAlign: "left",
							}}>
							<Typography variant='h6'>Wheel Chair</Typography>
						</Box>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ButtonGroup>
							<Button
								sx={{ color: "black" }}
								aria-label='reduce'
								onClick={() => {
									setWheelchairCount(Math.max(wheelchairCount - 1, 0));
								}}>
								<RemoveIcon fontSize='small' />
							</Button>
							<Button sx={{ color: "black" }} variant='outlined'>
								{" "}
								{wheelchairCount}
							</Button>
							<Button
								sx={{ color: "black" }}
								aria-label='increase'
								onClick={() => {
									setWheelchairCount(wheelchairCount + 1);
								}}>
								<AddIcon fontSize='small' />
							</Button>
						</ButtonGroup>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ListItemIcon>
							<Checkbox
								icon={
									<Button
										style={{ backgroundColor: "transparent" }}
										sx={{
											px: 2,
											py: 1,
											bgcolor: "#EAECEE",
											color: "black",
											fontWeight: "bold",
											border: "1px solid",
										}}
										variant='contained'>
										Select
									</Button>
								}
								checkedIcon={
									<Button
										className='activeButtonColor'
										sx={{ px: 2, py: 1 }}
										variant='contained'>
										<CheckIcon sx={{ mr: 0.7 }} /> Select
									</Button>
								}
								checked={wheelchair}
								onChange={wheelchair1}
							/>
						</ListItemIcon>
					</Grid>
				</Grid>
			</ListItemButton>
			<Divider sx={{ my: 1.5 }} />
			<ListItemButton
				button
				disableRipple
				disableTouchRipple
				disablefocusribble='true'>
				<Grid container spacing={2} sx={{ alignItems: "center" }}>
					<Grid item md={6} sm={4} xs={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								textAlign: "left",
							}}>
							<Typography variant='h6'>Car Seat</Typography>
						</Box>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ButtonGroup>
							<Button
								sx={{ color: "black" }}
								aria-label='reduce'
								onClick={() => {
									setcarSeatCount(Math.max(carSeatCount - 1, 0));
								}}>
								<RemoveIcon fontSize='small' />
							</Button>
							<Button sx={{ color: "black" }} variant='outlined'>
								{" "}
								{carSeatCount}
							</Button>
							<Button
								sx={{ color: "black" }}
								aria-label='increase'
								onClick={() => {
									setcarSeatCount(carSeatCount + 1);
								}}>
								<AddIcon fontSize='small' />
							</Button>
						</ButtonGroup>
					</Grid>
					<Grid item md={3} sm={4} xs={6}>
						<ListItemIcon>
							<Checkbox
								icon={
									<Button
										style={{ backgroundColor: "transparent" }}
										sx={{
											px: 2,
											py: 1,
											bgcolor: "#EAECEE",
											color: "black",
											fontWeight: "bold",
											border: "1px solid",
										}}
										variant='contained'>
										Select
									</Button>
								}
								checkedIcon={
									<Button
										className='activeButtonColor'
										sx={{ px: 2, py: 1 }}
										variant='contained'>
										<CheckIcon sx={{ mr: 0.7 }} /> Select
									</Button>
								}
								checked={carSeat}
								onChange={carSeat1}
							/>
						</ListItemIcon>
					</Grid>
				</Grid>
			</ListItemButton>
			<Grid container spacing={{ md: 2, xs: 0 }}>
				<Grid item md={6} xs={12}>
					<Link to='/booking' style={{ textDecoration: "none" }}>
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
						onClick={saveAndGo}
						className='buttonColor'
						sx={{ width: "100%", py: 1.7, mt: 2 }}
						variant='contained'
						endIcon={<SendIcon />}>
						ENTER CONTACT DETAILS
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default ExtraOptions;
