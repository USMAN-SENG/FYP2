import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ButtonStep } from "./formComponents/ButtonStep";

export default function AddPersonalAbout({
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
}) {
	let disablePreviousButton = false;
	let disableNextButton = false;
	 

	return (
		<>
			<Typography variant="h6" align="center">
				step 3
			</Typography>

			<Typography m={2} variant="h5" align="center">
				Write About Your Office/business
			</Typography>
			<Grid container direction="column" spacing={2} p={2} >
				<Grid item>
					<TextField
						placeholder="Name"
						variant="outlined"
						fullWidth
						multiline
						minRows={1}
					/>
				</Grid>
				<Grid item>
					<TextField
						placeholder="Address"
						variant="outlined"
						fullWidth
						multiline
						minRows={1}
					/>
				</Grid>
				<Grid item>
					<TextField
						placeholder="Description"
						variant="outlined"
						fullWidth
						multiline
						minRows={4}
					/>
				</Grid>
			</Grid>

			<ButtonStep
				spacingBetweenButtons={spacingBetweenButtons}
				decreaseFormStep={decreaseFormStep}
				formStep={formStep}
				increaseFormStep={increaseFormStep}
				disablePreviousButton={disablePreviousButton}
				disableNextButton={disableNextButton}
				submitButton={"submit"}
			/>
		</>
	);
}
