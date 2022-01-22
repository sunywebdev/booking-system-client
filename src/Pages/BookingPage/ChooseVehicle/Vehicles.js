import { Badge, Button, Divider, Grid } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import GroupIcon from "@mui/icons-material/Group";
import LuggageIcon from "@mui/icons-material/Luggage";
import CheckIcon from "@mui/icons-material/Check";
import { reactLocalStorage } from "reactjs-localstorage";
import BeatLoader from "react-spinners/BeatLoader";

const Vehicles = () => {
	const [cars, setCars] = React.useState();
	React.useEffect(() => {
		fetch(`https://fierce-reef-90342.herokuapp.com/cars`)
			.then((res) => res.json())
			.then((data) => setCars(data.reverse()));
	}, []);

	const data = reactLocalStorage.getObject("vehicles");
	const [selectedId, setSelectedId] = React.useState(data?.carId || 1);

	const setCar = (car) => {
		setSelectedId(car?.carId);
		const data = {
			carId: car?.carId,
			carName: car?.carName,
			carInfo: car?.carInfo,
			carPhoto1: car?.carPhoto1,
			carPhoto2: car?.carPhoto2,
			carPhoto3: car?.carPhoto3,
			carPassenger: car?.carPassenger,
			carLuggage: car?.carLuggage,
		};
		reactLocalStorage.setObject("vehicles", data);
	};

	return (
		<div>
			{cars?.map((car, key) => (
				<Box key={key}>
					<Box
						sx={{
							textAlign: "left",
						}}>
						<Grid container spacing={2} sx={{ alignItems: "center" }}>
							<Grid item md={4} xs={12}>
								<Grid container spacing={2} sx={{ alignItems: "center" }}>
									<Grid item md={12} xs={12}>
										<CardMedia
											sx={{ width: "100%" }}
											component='img'
											alt=''
											image={car?.carPhoto1}
										/>
									</Grid>
									<Grid item md={6} xs={6}>
										<CardMedia
											sx={{ width: "100%" }}
											component='img'
											alt=''
											image={car?.carPhoto2}
										/>
									</Grid>
									<Grid item md={6} xs={6}>
										<CardMedia
											sx={{ width: "100%" }}
											component='img'
											alt=''
											image={car?.carPhoto3}
										/>
									</Grid>
								</Grid>
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
								</CardContent>
							</Grid>
							<Grid item md={3} xs={12}>
								<Grid container spacing={2} sx={{ mx: "auto" }}>
									<Grid item md={12} xs={6}>
										<Box sx={{ display: "flex" }}>
											<Badge
												badgeContent={car?.carPassenger}
												color='primary'
												sx={{ mx: 1 }}>
												<GroupIcon sx={{ fontSize: 55 }} />
											</Badge>
											<Badge
												badgeContent={car?.carLuggage}
												color='primary'
												sx={{ mx: 1 }}>
												<LuggageIcon sx={{ fontSize: 55 }} />
											</Badge>
										</Box>
									</Grid>
									<Grid item md={12} xs={6} sx={{ m: "auto" }}>
										<Box sx={{ mx: 2 }}>
											{selectedId === car?.carId ? (
												<Button
													sx={{ px: 3, py: 1.5 }}
													variant='contained'
													className='activeButtonColor'
													onClick={() => setCar(car)}>
													<CheckIcon sx={{ mr: 0.7 }} /> Select
												</Button>
											) : (
												<Button
													style={{ backgroundColor: "transparent" }}
													sx={{
														px: 3,
														py: 1.5,
														bgcolor: "#EAECEE",
														color: "black",
														fontWeight: "bold",
														border: "1px solid",
													}}
													variant='contained'
													onClick={() => setCar(car)}>
													Select
												</Button>
											)}
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
					<Divider sx={{ my: 1.5 }} />
				</Box>
			))}
			<Box>{!cars && <BeatLoader size={10} />}</Box>
		</div>
	);
};

export default Vehicles;
