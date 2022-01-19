import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import {
	Button,
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

const ExtraOptions = () => {
	const [wheelchair, setWheelchair] = React.useState(true);
	const wheelchair1 = (event) => {
		setWheelchair(event.target.checked);
	};

	const [babySeat, setBabySeat] = React.useState(true);
	const babySeat1 = (event) => {
		setBabySeat(event.target.checked);
	};

	const [carSeat, setCarSeat] = React.useState(true);
	const carSeat1 = (event) => {
		setCarSeat(event.target.checked);
	};

	const navigate = useNavigate();
	const destination = "/contactdetails";

	const saveAndGo = () => {
		const data = { wheelchair, babySeat, carSeat };
		reactLocalStorage.setObject("extraOpions", data);
		navigate(destination);
	};

	return (
		<div>
			<ListItemButton
				dense
				sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						textAlign: "left",
						width: "80%",
					}}>
					<Typography variant='h6'>Child Seat</Typography>
					<Typography variant='subtitle2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
						voluptatibus quisquam veniam alias aut recusandae eveniet, beatae
						facilis, nesciunt consectetur molestiae qui laudantium placeat.
						Laudantium id error quaerat ex beatae.
					</Typography>
				</Box>
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
								className='buttonColor'
								sx={{ px: 2, py: 1 }}
								variant='contained'>
								<CheckIcon sx={{ mr: 0.7 }} /> Select
							</Button>
						}
						checked={babySeat}
						onChange={babySeat1}
					/>
				</ListItemIcon>
			</ListItemButton>
			<Divider sx={{ my: 1.5 }} />
			<ListItemButton
				dense
				sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						textAlign: "left",
						width: "80%",
					}}>
					<Typography variant='h6'>Wheel Chair</Typography>
					<Typography variant='subtitle2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						deleniti porro accusantium facilis cum? Ab cum voluptatum maiores.
						In, ratione. Soluta esse officiis culpa cum sunt quia aliquam
						voluptatem hic!
					</Typography>
				</Box>
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
								className='buttonColor'
								sx={{ px: 2, py: 1 }}
								variant='contained'>
								<CheckIcon sx={{ mr: 0.7 }} /> Select
							</Button>
						}
						checked={wheelchair}
						onChange={wheelchair1}
					/>
				</ListItemIcon>
			</ListItemButton>
			<Divider sx={{ my: 1.5 }} />
			<ListItemButton
				dense
				sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						textAlign: "left",
						width: "80%",
					}}>
					<Typography variant='h6'>Car Seat</Typography>
					<Typography variant='subtitle2'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
						corrupti. Qui ducimus est maxime nam nostrum debitis nemo quod
						provident illum quaerat illo minima iure, unde laborum nulla odit
						voluptate.
					</Typography>
				</Box>
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
								className='buttonColor'
								sx={{ px: 2, py: 1 }}
								variant='contained'>
								<CheckIcon sx={{ mr: 0.7 }} /> Select
							</Button>
						}
						checked={carSeat}
						onChange={carSeat1}
					/>
				</ListItemIcon>
			</ListItemButton>
			<Grid container spacing={{ md: 2, xs: 0 }}>
				<Grid item md={6} xs={12}>
					<Link to='/' style={{ textDecoration: "none" }}>
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
