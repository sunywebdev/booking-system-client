import {
	Box,
	CardMedia,
	Container,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

const PaymentMethod = ({ payment }) => {
	const data = reactLocalStorage.getObject("paymentDetails");

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
					<Grid item md={6} xs={6}>
						{select === pay?.id ? (
							<Paper
								elevation={4}
								onClick={() => selected(pay)}
								sx={{ border: "7px solid" }}
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
