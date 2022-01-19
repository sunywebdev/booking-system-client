import {
	Box,
	CardMedia,
	Container,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
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
			<Box
				className='headline'
				sx={{
					width: "100%",
					py: 1.5,
					my: 2,
				}}>
				<Typography variant='body' component='div'>
					Choose payment method
				</Typography>
			</Box>

			<Grid container spacing={2} sx={{ justifyContent: "center" }}>
				{payment?.map((pay) => (
					<Grid item md={4} xs={6}>
						{select === pay?.id ? (
							<Paper
								elevation={4}
								onClick={() => selected(pay)}
								sx={{ border: "5px solid" }}
								className='payBorder'>
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
