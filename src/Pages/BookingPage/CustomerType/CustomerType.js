import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
	ButtonGroup,
	FormControl,
	Grid,
	MenuItem,
	Select,
	TextField,
	Typography,
	FormHelperText,
	Container,
} from "@mui/material";
import { reactLocalStorage } from "reactjs-localstorage";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import BusinessIcon from "@mui/icons-material/Business";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import logo from "../logo.png";

const CustomerType = () => {
	const [whom, setWhom] = useState("");
	useEffect(() => {
		const data = { forWhom: whom };
		reactLocalStorage.setObject("forWhom", data);
	}, [whom]);

	const [who, setWho] = useState("");
	useEffect(() => {
		const data = { forWho: who };
		reactLocalStorage.setObject("forWho", data);
	}, [who]);

	const [company, setCompany] = React.useState("");
	const handleChange = (event) => {
		setCompany(event.target.value);
	};
	useEffect(() => {
		const data = { company: company };
		reactLocalStorage.setObject("company", data);
	}, [company]);

	const [reqCompany, setReqCompany] = React.useState("");
	const handleChangeReqQompany = (event) => {
		setReqCompany(event.target.value);
	};
	useEffect(() => {
		const data = { reqCompany: reqCompany };
		reactLocalStorage.setObject("company", data);
	}, [reqCompany]);

	const navigate = useNavigate();
	const destination = "/booking";

	const [txn, setTxn] = React.useState("");
	useEffect(() => {
		const randomNumber = Math.floor(Math.random() * 90000) + 10000;
		if (who === "A Company") {
			setTxn("COM" + randomNumber);
		} else {
			setTxn("PER" + randomNumber);
		}
	}, [who]);
	const [companyList, setCompanyList] = useState([]);
	useEffect(() => {
		fetch(`https://fierce-reef-90342.herokuapp.com/companylist`)
			.then((res) => res.json())
			.then((data) => setCompanyList(data.reverse()));
	}, [who]);

	const submit = () => {
		const forWhom = reactLocalStorage.getObject("forWhom");
		const forWho = reactLocalStorage.getObject("forWho");
		const company = reactLocalStorage.getObject("company");
		const data = { ...forWhom, ...forWho, ...company, txn: txn };
		reactLocalStorage.setObject("client", data);
		navigate(destination);
	};

	return (
		<div>
			<Container
				sx={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
					minHeight: "70vh",
				}}>
				<img src={logo} alt='' style={{ width: "200px", margin: "9px 0" }} />
				<Typography
					gutterBottom
					variant='h5'
					component='div'
					sx={{ fontWeight: "bold" }}>
					Please Select For Booking
				</Typography>
				<Grid container spacing={2}>
					<Grid item md={5} sm={7} xs={12} sx={{ mx: "auto" }}>
						<Grid container spacing={2}>
							<Grid item md={12} xs={12}>
								<FormHelperText sx={{ textAlign: "center", fontSize: 23 }}>
									Booking For?
								</FormHelperText>
								<ButtonGroup variant='contained' sx={{ width: "100%" }}>
									{whom === "Booking for myself" ? (
										<Button
											startIcon={<PersonIcon />}
											className='buttonActiveColor'
											sx={{ width: "100%", py: 1.3 }}
											variant='contained'
											onClick={() => setWhom("Booking for myself")}>
											Booking for myself
										</Button>
									) : (
										<Button
											startIcon={<PersonIcon />}
											className='buttonColor'
											sx={{ width: "100%", py: 1.3 }}
											variant='contained'
											onClick={() => setWhom("Booking for myself")}>
											Booking for myself
										</Button>
									)}
									{whom === "Booking on behalf" ? (
										<Button
											startIcon={<PersonAddAltIcon />}
											className='buttonActiveColor'
											sx={{ width: "100%", py: 1.3 }}
											variant='contained'
											onClick={() => setWhom("Booking on behalf")}>
											Booking on behalf
										</Button>
									) : (
										<Button
											startIcon={<PersonAddAltIcon />}
											className='buttonColor'
											sx={{ width: "100%", py: 1.3 }}
											variant='contained'
											onClick={() => setWhom("Booking on behalf")}>
											Booking on behalf
										</Button>
									)}
								</ButtonGroup>
							</Grid>
							{whom === "Booking on behalf" && (
								<Grid item md={12} xs={12}>
									<FormHelperText sx={{ textAlign: "center", fontSize: 23 }}>
										You Are?
									</FormHelperText>
									<ButtonGroup variant='contained' sx={{ width: "100%" }}>
										{who === "A Person" ? (
											<Button
												startIcon={<PersonIcon />}
												className='buttonActiveColor'
												variant='contained'
												sx={{ width: "100%", py: 1.3 }}
												onClick={() => setWho("A Person")}>
												Are you a person?
											</Button>
										) : (
											<Button
												startIcon={<PersonIcon />}
												className='buttonColor'
												variant='contained'
												sx={{ width: "100%", py: 1.3 }}
												onClick={() => setWho("A Person")}>
												Are you a person?
											</Button>
										)}
										{who === "A Company" ? (
											<Button
												startIcon={<BusinessIcon />}
												className='buttonActiveColor'
												sx={{ width: "100%", py: 1.3 }}
												variant='contained'
												onClick={() => setWho("A Company")}>
												Are You a company?
											</Button>
										) : (
											<Button
												startIcon={<BusinessIcon />}
												className='buttonColor'
												sx={{ width: "100%", py: 1.3 }}
												variant='contained'
												onClick={() => setWho("A Company")}>
												Are You a company?
											</Button>
										)}
									</ButtonGroup>
								</Grid>
							)}
							{who === "A Company" && (
								<Grid item md={12} xs={12}>
									<FormHelperText sx={{ textAlign: "center", fontSize: 23 }}>
										Your Company?
									</FormHelperText>
									<FormControl sx={{ width: "100%" }}>
										<Select
											value={company}
											onChange={handleChange}
											displayEmpty
											inputProps={{ "aria-label": "Without label" }}>
											<MenuItem value=''>
												<em>
													<div
														style={{
															display: "flex",
															justifyContent: "center",
															alignItems: "center",
														}}>
														<BusinessIcon sx={{ mr: 1 }} />
														<em>Select Company</em>
													</div>
												</em>
											</MenuItem>
											{companyList?.map((company, key) => (
												<MenuItem key={key} value={`${company?.name}`}>
													{company?.name}
												</MenuItem>
											))}

											<MenuItem value={"Request to add"}>
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}>
													<PlaylistRemoveIcon sx={{ mr: 1 }} />
													<em>Not on the list?</em>
												</div>
											</MenuItem>
										</Select>
									</FormControl>
									{company === "Request to add" && (
										<TextField
											sx={{ width: "100%", mt: 1.5 }}
											value={reqCompany}
											onChange={handleChangeReqQompany}
											placeholder='Request to add your Company'
											variant='outlined'
										/>
									)}
								</Grid>
							)}
							{(company ||
								whom === "Booking for myself" ||
								who === "A Person") && (
								<Grid item md={12} xs={12}>
									<Button
										endIcon={<ArrowRightIcon />}
										className='buttonColor'
										variant='contained'
										sx={{ width: "100%", py: 1.3, mb: 4 }}
										onClick={submit}>
										Continue
									</Button>
								</Grid>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default CustomerType;
