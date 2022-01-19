import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import BookingPage from "./Pages/BookingPage/BookingPage";
import ChooseVehicle from "./Pages/BookingPage/ChooseVehicle/ChooseVehicle";
import Contact from "./Pages/BookingPage/Contact/Contact";
import RideDetails from "./Pages/BookingPage/RideDetails/RideDetails";
import TotalSummary from "./Pages/BookingPage/TotalSummary/TotalSummary";
import Login from "./Pages/Login/Login";
import ResetPass from "./Pages/ResetPass/ResetPass";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<RideDetails />}></Route>
						<Route path='/login' element={<Login />}></Route>
						<Route path='/signup' element={<SignUp />}></Route>
						<Route path='/resetpassword' element={<ResetPass />}></Route>
						<Route path='/main' element={<BookingPage />}></Route>
						<Route path='/choosevehicle' element={<ChooseVehicle />}></Route>
						<Route path='/contactdetails' element={<Contact />}></Route>
						<Route path='/totalsummary' element={<TotalSummary />}></Route>
						<Route path='/xx' element={<BookingPage />}></Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
