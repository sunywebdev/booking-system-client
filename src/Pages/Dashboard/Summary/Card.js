import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CountUp } from "use-count-up";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import ArchitectureIcon from "@mui/icons-material/Architecture";

const Card = ({ bookings, ChauffeurServices, FlatRate, Hourly, Distance }) => {
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item md={3} xs={12} sm={6}>
					<Paper elevation={3}>
						<Box display='flex' justifyContent='space-between'>
							<Box
								className='bgColor'
								sx={{ p: 3, color: "white" }}
								display='flex'
								alignItems='center'>
								<ArchitectureIcon sx={{ fontSize: 50 }} />
							</Box>
							<Box sx={{ textAlign: "right", m: 3, color: "black" }}>
								<Typography variant='h5' component='div'>
									Distance
								</Typography>
								<Typography variant='h5' component='div'>
									<CountUp isCounting end={Distance} duration={2} />
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={3} xs={12} sm={6}>
					<Paper elevation={3}>
						<Box display='flex' justifyContent='space-between'>
							<Box
								className='bgColor'
								sx={{ p: 3, color: "white" }}
								display='flex'
								alignItems='center'>
								<HourglassBottomIcon sx={{ fontSize: 50 }} />
							</Box>
							<Box sx={{ textAlign: "right", m: 3, color: "black" }}>
								<Typography variant='h5' component='div'>
									Hourly
								</Typography>
								<Typography variant='h5' component='div'>
									<CountUp isCounting end={Hourly} duration={2} />
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={3} xs={12} sm={6}>
					<Paper elevation={3}>
						<Box display='flex' justifyContent='space-between'>
							<Box
								className='bgColor'
								sx={{ p: 3, color: "white" }}
								display='flex'
								alignItems='center'>
								<TrendingFlatIcon sx={{ fontSize: 50 }} />
							</Box>
							<Box sx={{ textAlign: "right", m: 3, color: "black" }}>
								<Typography variant='h5' component='div'>
									Flat Rate
								</Typography>
								<Typography variant='h5' component='div'>
									<CountUp isCounting end={FlatRate} duration={2} />
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={3} xs={12} sm={6}>
					<Paper elevation={3}>
						<Box display='flex' justifyContent='space-between'>
							<Box
								className='bgColor'
								sx={{ p: 3, color: "white" }}
								display='flex'
								alignItems='center'>
								<DriveEtaIcon sx={{ fontSize: 50 }} />
							</Box>
							<Box sx={{ textAlign: "right", m: 3, color: "black" }}>
								<Typography variant='h5' component='div'>
									Chauffeur
								</Typography>
								<Typography variant='h5' component='div'>
									<CountUp isCounting end={ChauffeurServices} duration={2} />
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Card;
