import { CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import a from "./2.jpg";
import b from "./3.jpg";
import { reactLocalStorage } from "reactjs-localstorage";

const PaymentMethod = () => {
	const data = reactLocalStorage.getObject("paymentDetails");
	const payment = [
		{ id: 1, img: a, gateway: "Stripe" },
		{ id: 2, img: b, gateway: "Cash" },
	];
	const [select, setSelect] = useState(data?.id || 2);
	const selected = (pay) => {
		setSelect(pay?.id);
		reactLocalStorage.setObject("paymentDetails", pay);
	};

	return (
		<Container sx={{ mx: "auto" }}>
			<Typography gutterBottom variant='h5' component='div'>
				Choose payment method
			</Typography>
			<Grid container spacing={2} sx={{ justifyContent: "center" }}>
				{payment?.map((pay) => (
					<Grid item md={4}>
						{select === pay?.id ? (
							<Paper
								elevation={4}
								onClick={() => selected(pay)}
								sx={{ border: "5px solid red" }}>
								<CardMedia component='img' alt=' ' image={pay?.img} />
							</Paper>
						) : (
							<Paper elevation={4} onClick={() => selected(pay)}>
								<CardMedia component='img' alt=' ' image={pay?.img} />
							</Paper>
						)}
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default PaymentMethod;
