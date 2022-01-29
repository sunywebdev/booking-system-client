import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Button } from "@mui/material";
import useAuth from "../../context/useAuth";
import InfoIcon from "@mui/icons-material/Info";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BusinessIcon from "@mui/icons-material/Business";

const drawerWidth = 222;

function Dashboard(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const drawer = (
		<Box sx={{ my: "auto" }}>
			<List>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "white",
					}}
					to=''>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center" }}>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary={"Summary"} />
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "white",
					}}
					to='addvehicle'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center" }}>
							<DirectionsCarIcon />
						</ListItemIcon>
						<ListItemText primary={"Add Vehicle"} />
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "white",
					}}
					to='addcompany'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center" }}>
							<BusinessIcon />
						</ListItemIcon>
						<ListItemText primary={"All Company"} />
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "white",
					}}
					to='vehicles'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center" }}>
							<DirectionsCarIcon />
						</ListItemIcon>
						<ListItemText primary={"Vehicles"} />
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
						color: "white",
					}}
					to='bookings'>
					<ListItem button>
						<ListItemIcon sx={{ justifyContent: "center" }}>
							<ListAltIcon />
						</ListItemIcon>
						<ListItemText primary={"Bookings"} />
					</ListItem>
				</Link>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	const { logOut } = useAuth();
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				className='bgColor'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Box display='flex' sx={{ flexGrow: 1 }}>
						<DashboardIcon sx={{ mr: 1 }} />
						<Typography variant='h6'>DASHBOARD</Typography>
					</Box>
					<Button onClick={() => logOut()} color='inherit'>
						LogOut
					</Button>
				</Toolbar>
			</AppBar>
			<Box
				onClick={() => setMobileOpen(false)}
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					className='dashboard'
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
						backgroundColor: "transparent",
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					className='dashboard'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
						backgroundColor: "transparent",
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Toolbar />
				<Outlet></Outlet>
			</Box>
		</Box>
	);
}

Dashboard.propTypes = {
	window: PropTypes.func,
};

export default Dashboard;
