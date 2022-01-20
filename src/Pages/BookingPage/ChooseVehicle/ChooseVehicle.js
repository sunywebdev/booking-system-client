import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ExtraOptions from "./ExtraOptions";
import Vehicles from "./Vehicles";
import Summary from "../Summary/Summary";
import Step1 from "../Steps/Step1";

const ChooseVehicle = () => {
	return (
		<Container>
			<Box sx={{ my: 2.5 }}>
				<Step1 />
			</Box>
			<Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item md={3} xs={12}>
					<Summary />
				</Grid>
				<Grid item md={9} xs={12}>
					<Box
						className='headline'
						sx={{
							width: "100%",
							py: 1.5,
							my: 2,
						}}>
						<Typography variant='body' component='div'>
							PASSENGERS AND LUGGAGE
						</Typography>
					</Box>
					<Grid container spacing={2}>
						<Grid item md={12}>
							<Vehicles />
						</Grid>
					</Grid>
					<Box
						className='headline'
						sx={{
							width: "100%",
							py: 1.5,
							my: 2,
						}}>
						<Typography variant='body' component='div'>
							Important options
						</Typography>
					</Box>
					<ExtraOptions />
				</Grid>
			</Grid>
		</Container>
	);
};

export default ChooseVehicle;
