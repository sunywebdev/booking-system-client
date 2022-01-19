import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ExtraOptions from "./ExtraOptions";
import Vehicles from "./Vehicles";
import SendIcon from "@mui/icons-material/Send";
import Summary from "../Summary/Summary";
import { Link, useNavigate } from "react-router-dom";
import Step1 from "../Steps/Step1";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ChooseVehicle = () => {
	const extraOptions = [
		{
			extraId: 1,
			extraName: "Child Seat ",
			extraDetails: "Baby car seat for children aged 0-36 months",
			extraMoney: 5.5,
			count: 0,
		},
		{
			extraId: 2,
			extraName: "Bouquet of Flowers",
			extraDetails: "A bouquet of seasonal flowers prepared by a local florist",
			extraMoney: 8.5,
			count: 0,
		},
		{
			extraId: 3,
			extraName: "Vodka Bottle ",
			extraDetails: "Absolut Vodka 0.7l Bottle",
			extraMoney: 6.5,
			count: 0,
		},
		{
			extraId: 4,
			extraName: "French Champagne ",
			extraDetails: "French Champagne Brut 0.75l Bottle",
			extraMoney: 4.5,
			count: 0,
		},
	];
	const navigate = useNavigate();
	const destination = "/contactdetails";
	const goto = () => {
		navigate(destination);
	};
	return (
		<>
			<Box sx={{ my: 2.5 }}>
				<Step1 />
			</Box>
			<Grid container spacing={2}>
				<Grid item md={3} xs={12}>
					<Summary />
				</Grid>
				<Grid item md={9} xs={12}>
					<Box
						sx={{
							width: "100%",
							bgcolor: "#EAECEE",
							py: 1,
							color: "black",
							my: 2,
							fontWeight: "bold",
						}}>
						<Typography gutterBottom variant='body' component='div'>
							PASSENGERS AND LUGGAGE
						</Typography>
					</Box>
					<Grid container spacing={2}>
						<Grid item md={12}>
							<Vehicles />
						</Grid>
					</Grid>
					<Box
						sx={{
							width: "100%",
							bgcolor: "#EAECEE",
							py: 1,
							color: "black",
							my: 2,
							fontWeight: "bold",
						}}>
						<Typography gutterBottom variant='body' component='div'>
							Extra options
						</Typography>
					</Box>
					{extraOptions.map((extra) => (
						<ExtraOptions extra={extra} />
					))}
					<Grid item md={12} xs={12}>
						<Grid container spacing={2}>
							<Grid item md={6} xs={5}>
								<Link to='/' style={{ textDecoration: "none" }}>
									<Button
										variant='contained'
										sx={{ width: "100%", py: 1.7, mt: 2 }}>
										<ArrowBackIcon sx={{ mr: 1 }} />
										Back
									</Button>
								</Link>
							</Grid>
							<Grid item md={6} xs={5}>
								<Button
									onClick={goto}
									sx={{ width: "100%", py: 1.7, mt: 2 }}
									variant='contained'
									endIcon={<SendIcon />}>
									ENTER CONTACT DETAILS
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default ChooseVehicle;
