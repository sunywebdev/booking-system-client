import {
	Box,
	Button,
	CardContent,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { reactLocalStorage } from "reactjs-localstorage";

const ExtraOptions = ({ extra }) => {
	const [selected, setSelected] = React.useState();
	const save = (extra) => {
		setSelected(true);
		reactLocalStorage.setObject(`${extra?.extraName}`, extra);
	};
	console.log(selected);
	const remove = (extra) => {
		setSelected(false);
		reactLocalStorage.remove(`${extra?.extraName}`, extra);
	};
	const data = reactLocalStorage.getObject(`${extra?.extraName}`);

	return (
		<div>
			<>
				<Grid container spacing={2}>
					<Grid item md={7} xs={12}>
						<CardContent sx={{ textAlign: "left" }}>
							<Box display='flex' sx={{ my: 1 }}>
								<Typography variant='h6'>{extra?.extraName}</Typography>
							</Box>
							<Typography variant='subtitle'>{extra?.extraDetails}</Typography>
						</CardContent>
					</Grid>
					<Grid
						item
						md={5}
						xs={12}
						display='flex'
						sx={{
							flexDirection: "row",
							textAlign: "left",
							alignItems: "center",
							justifyContent: "space-evenly",
						}}>
						<Box sx={{ mx: 2 }}>
							{data?.extraName === extra?.extraName ? (
								<Button
									sx={{ px: 2, py: 1 }}
									variant='contained'
									onClick={() => remove(extra)}>
									<CheckIcon sx={{ mr: 0.7 }} /> Select
								</Button>
							) : (
								<Button
									style={{ backgroundColor: "transparent" }}
									sx={{
										px: 2,
										py: 1,
										bgcolor: "#EAECEE",
										color: "black",
										fontWeight: "bold",
										border: "1px solid",
									}}
									variant='contained'
									onClick={() => save(extra)}>
									Select
								</Button>
							)}
						</Box>
					</Grid>
				</Grid>
				<Divider sx={{ my: 1 }} />
			</>
		</div>
	);
};

export default ExtraOptions;

/* <ButtonGroup>
							<Button
								aria-label='reduce'
								onClick={() => {
									setCount(Math.max(count - 1, 0));
								}}>
								<RemoveIcon fontSize='small' />
							</Button>
							<Button variant='outlined'> {count}</Button>
							<Button
								aria-label='increase'
								onClick={() => {
									setCount(count + 1);
								}}>
								<AddIcon fontSize='small' />
							</Button>
						</ButtonGroup> */
