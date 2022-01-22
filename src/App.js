import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import ChooseVehicle from "./Pages/BookingPage/ChooseVehicle/ChooseVehicle";
import Confirm from "./Pages/BookingPage/Confirm/Confirm";
import Contact from "./Pages/BookingPage/Contact/Contact";
import RideDetails from "./Pages/BookingPage/RideDetails/RideDetails";
import TotalSummary from "./Pages/BookingPage/TotalSummary/TotalSummary";
import AddCar from "./Pages/Dashboard/AddCar/AddCar";
import Booking from "./Pages/Dashboard/Bookings/Booking";
import Bookings from "./Pages/Dashboard/Bookings/Bookings";
import Cars from "./Pages/Dashboard/Cars/Cars";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Invoice from "./Pages/Dashboard/Invoice/Invoice";
import Summary from "./Pages/Dashboard/Summary/Summary";
import Login from "./Pages/Login/Login";
import ResetPass from "./Pages/ResetPass/ResetPass";

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<RideDetails />}></Route>
						<Route path='/login' element={<Login />}></Route>
						<Route path='/resetpassword' element={<ResetPass />}></Route>
						<Route path='/choosevehicle' element={<ChooseVehicle />}></Route>
						<Route path='/contactdetails' element={<Contact />}></Route>
						<Route path='/totalsummary' element={<TotalSummary />}></Route>
						<Route path='/confirm' element={<Confirm />}></Route>
						<Route path='/dashboard' element={<Dashboard />}>
							<Route path='/dashboard' element={<Summary />} />
							<Route path='/dashboard/addvehicle' element={<AddCar />} />
							<Route path='/dashboard/vehicles' element={<Cars />} />
							<Route path='/dashboard/bookings' element={<Bookings />} />
							<Route path='/dashboard/invoice' element={<Invoice />} />
							<Route path='/dashboard/bookings/:id' element={<Booking />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
