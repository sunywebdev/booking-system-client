import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import { reactLocalStorage } from "reactjs-localstorage";
import Step0 from "../Steps/Step0";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default function RideDetails() {
	const tab = reactLocalStorage.getObject("rideDetails");
	const theme = useTheme();
	const [value, setValue] = React.useState(tab?.tab || 0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<Container>
			<Box sx={{ my: 2.5 }}>
				<Step0 />
			</Box>
			<Grid container spacing={2}>
				<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
					<Box sx={{ bgcolor: "background.paper" }}>
						<Box
							className='headline'
							sx={{
								width: "100%",
								py: 1.5,
							}}>
							<Typography variant='body' component='div'>
								RIDE DETAILS
							</Typography>
						</Box>
						<AppBar position='static'>
							<Tabs
								value={value}
								onChange={handleChange}
								indicatorColor='secondary'
								textColor='inherit'
								variant='fullWidth'
								aria-label='full width tabs example'>
								<Tab label='DISTANCE' {...a11yProps(0)} />
								<Tab label='HOURLY' {...a11yProps(1)} />
								<Tab label='FLAT RATE' {...a11yProps(2)} />
							</Tabs>
						</AppBar>
						<SwipeableViews
							axis={theme.direction === "rtl" ? "x-reverse" : "x"}
							index={value}
							onChangeIndex={handleChangeIndex}>
							<TabPanel value={value} index={0} dir={theme.direction}>
								<Tab1 />
							</TabPanel>
							<TabPanel value={value} index={1} dir={theme.direction}>
								<Tab2 />
							</TabPanel>
							<TabPanel value={value} index={2} dir={theme.direction}>
								<Tab3 />
							</TabPanel>
						</SwipeableViews>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
