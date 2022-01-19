import { Badge, Button, Divider, Grid } from "@mui/material";
import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import GroupIcon from "@mui/icons-material/Group";
import LuggageIcon from "@mui/icons-material/Luggage";
import CheckIcon from "@mui/icons-material/Check";
import { reactLocalStorage } from "reactjs-localstorage";

const Vehicles = ({ setData }) => {
	const cars = [
		{
			carId: 1,
			carName: "Mercedes-Benz E220",
			carInfo:
				"Do not worry about missing an important meeting because of road conditions, just relax in your reclining leather seat. A great choice for a business meeting or a business trip.",
			carCost: 5.99,
			carPhoto:
				"http://quanticalabs.com/wp_plugins/chauffeur-booking-system/files/2017/11/image_03.jpg",
		},
		{
			carId: 2,
			carName: "BMW 5 Series Long",
			carInfo:
				"The mid-size luxury sedan by BMW with great V8 engine with both natural aspiration and turbocharging. A great option for corporate travel.",
			carCost: 6.99,
			carPhoto:
				"http://quanticalabs.com/wp_plugins/chauffeur-booking-system/files/2017/11/image_01.jpg",
		},
		{
			carId: 3,
			carName: "Mercedes-Benz S600",
			carInfo:
				"The world's best-selling luxury sedan with many of the company's latest innovations, including drivetrain technologies, interior features, and safety systems that give you the peace of mind you deserve.",
			carCost: 7.99,
			carPhoto:
				"http://quanticalabs.com/wp_plugins/chauffeur-booking-system/files/2017/11/image_04.jpg",
		},
		{
			carId: 4,
			carName: "Ford Tourneo",
			carInfo:
				"Comfortable Van for 7 passengers with plenty of leg room and a spacious trunk.",
			carCost: 8.99,
			carPhoto:
				"http://quanticalabs.com/wp_plugins/chauffeur-booking-system/files/2017/11/image_11.jpg",
		},
	];
	const data = reactLocalStorage.getObject("vehicles");
	const [selectedId, setSelectedId] = React.useState(data?.carId || 1);
	console.log(selectedId);
	const [vehicle, setVehicle] = React.useState(null);

	const setCar = (car) => {
		setSelectedId(car?.carId);
		setVehicle(car);
		reactLocalStorage.setObject("vehicles", car);
	};
	console.log(vehicle);
	return (
		<div>
			{cars.map((car, n) => (
				<>
					<Box
						sx={{
							textAlign: "left",
						}}>
						<Grid container spacing={2}>
							<Grid item md={4} xs={12}>
								<CardMedia
									sx={{ width: "100%" }}
									component='img'
									alt=''
									image={car?.carPhoto}
								/>
							</Grid>
							<Grid
								item
								md={5}
								xs={12}
								display='flex'
								sx={{
									flexDirection: "row",
									textAlign: "left",
									alignItems: "center",
								}}>
								<CardContent>
									<Typography variant='h6'>{car?.carName}</Typography>
									<Typography variant='body2'>{car?.carInfo}</Typography>
									<Typography sx={{ my: 1 }} variant='h4'>
										$ {car?.carCost}
									</Typography>
								</CardContent>
							</Grid>
							<Grid item md={3} xs={12} display='flex'>
								<CardActions
									sx={{
										flexDirection: { md: "column", xs: "row" },
										justifyContent: { md: " space-evenly", xs: "center" },
									}}>
									<Box>
										<Badge badgeContent={4} color='primary' sx={{ mx: 1 }}>
											<GroupIcon sx={{ fontSize: 55 }} />
										</Badge>
										<Badge badgeContent={4} color='primary' sx={{ mx: 1 }}>
											<LuggageIcon sx={{ fontSize: 55 }} />
										</Badge>
									</Box>

									<Box>
										{selectedId === car?.carId ? (
											<Button
												sx={{ px: 3, py: 1.5 }}
												variant='contained'
												onClick={() => setCar(car)}>
												<CheckIcon sx={{ mr: 0.7 }} /> Select
											</Button>
										) : (
											<Button
												sx={{ px: 3, py: 1.5 }}
												variant='contained'
												onClick={() => setCar(car)}>
												Select
											</Button>
										)}
									</Box>
								</CardActions>
							</Grid>
						</Grid>
					</Box>
					<Divider sx={{ my: 1.5 }} />
				</>
			))}
		</div>
	);
};

export default Vehicles;
