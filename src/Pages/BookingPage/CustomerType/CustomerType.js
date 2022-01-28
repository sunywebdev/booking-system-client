import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
	ButtonGroup,
	FormControl,
	Grid,
	MenuItem,
	Select,
	TextField,
	Container,
	Typography,
	FormHelperText,
} from "@mui/material";
import { reactLocalStorage } from "reactjs-localstorage";
import { useNavigate } from "react-router-dom";

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
	const submit = () => {
		const forWhom = reactLocalStorage.getObject("forWhom");
		const forWho = reactLocalStorage.getObject("forWho");
		const company = reactLocalStorage.getObject("company");
		const data = { ...forWhom, ...forWho, ...company };
		reactLocalStorage.setObject("client", data);
		navigate(destination);
	};

	return (
		<Container
			style={{
				position: "absolute",
				left: "50%",
				top: "50%",
				transform: "translate(-50%, -50%)",
			}}>
			<Typography
				gutterBottom
				variant='h4'
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
										className='buttonActiveColor'
										sx={{ width: "100%" }}
										variant='contained'
										onClick={() => setWhom("Booking for myself")}>
										Booking for myself
									</Button>
								) : (
									<Button
										className='buttonColor'
										sx={{ width: "100%" }}
										variant='contained'
										onClick={() => setWhom("Booking for myself")}>
										Booking for myself
									</Button>
								)}
								{whom === "Booking on behalf" ? (
									<Button
										className='buttonActiveColor'
										sx={{ width: "100%" }}
										variant='contained'
										onClick={() => setWhom("Booking on behalf")}>
										Booking on behalf
									</Button>
								) : (
									<Button
										className='buttonColor'
										sx={{ width: "100%" }}
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
											className='buttonActiveColor'
											variant='contained'
											sx={{ width: "100%" }}
											onClick={() => setWho("A Person")}>
											Are you a person?
										</Button>
									) : (
										<Button
											className='buttonColor'
											variant='contained'
											sx={{ width: "100%" }}
											onClick={() => setWho("A Person")}>
											Are you a person?
										</Button>
									)}
									{who === "A Company" ? (
										<Button
											className='buttonActiveColor'
											sx={{ width: "100%" }}
											variant='contained'
											onClick={() => setWho("A Company")}>
											Are You a company?
										</Button>
									) : (
										<Button
											className='buttonColor'
											sx={{ width: "100%" }}
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
											<em>Select Company</em>
										</MenuItem>
										<MenuItem value={"A1 Company"}>A Company</MenuItem>
										<MenuItem value={"B1 Company"}>B Company</MenuItem>
										<MenuItem value={"C1 Company"}>C Company</MenuItem>
										<MenuItem value={"D1 Company"}>D Company</MenuItem>
										<MenuItem value={"Request to add"}>
											Not on the list?
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
									className='buttonColor'
									variant='contained'
									sx={{ width: "100%" }}
									onClick={submit}>
									Continue
								</Button>
							</Grid>
						)}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CustomerType;
