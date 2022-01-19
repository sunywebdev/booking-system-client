import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Step2 from "../Steps/Step2";
import Summary from "../Summary/Summary";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<div>
			<Box sx={{ my: 2.5 }}>
				<Step2 />
			</Box>
			<Grid container spacing={2}>
				<Grid item md={4} xs={12}>
					<Summary />
				</Grid>
				<Grid item md={8} xs={12}>
					<ContactForm />
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;
