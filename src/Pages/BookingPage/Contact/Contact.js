import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Step2 from "../Steps/Step2";
import Summary from "../Summary/Summary";
import ContactForm from "./ContactForm";
import a from "./2.jpg";
import b from "./3.jpg";

const Contact = () => {
	const payment = [
		{ id: 1, img: a, gateway: "Stripe" },
		{ id: 2, img: b, gateway: "Card" },
	];
	return (
		<Container>
			<Box sx={{ my: 2.5 }}>
				<Step2 />
			</Box>
			<Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item md={4} xs={12}>
					<Summary />
				</Grid>
				<Grid item md={8} xs={12}>
					<ContactForm payment={payment} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Contact;
