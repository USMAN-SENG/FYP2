import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ButtonStep } from "./formComponents/ButtonStep";

export function AddFAQ({
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
}) {
	let disablePreviousButton = false;
	let disableNextButton = false;
	let disableAddQuestionButton = false;

	let FAQ =[1];

	

	if(FAQ.length < 1){
		disableNextButton = true;
		disableAddQuestionButton = true;
	}

	return (
		<>
			<Typography variant="h6" align="center">
				step 2
			</Typography>

			<Typography m={2} variant="h5" align="center">
				Add FAQ
			</Typography>
			<Grid container direction="column" spacing={2} sx={{ p: 2 }}>
				<Grid item>
					<TextField
						
						placeholder="Question"
						variant="outlined"
						fullWidth
						multiline
						minRows={1}
					/>
				</Grid>
				<Grid item>
					<TextField
						
						placeholder="Answer"
						variant="outlined"
						fullWidth
						multiline
						minRows={4}
					/>
				</Grid>
			</Grid>
			<br />
			<br />
			<ButtonStep
				spacingBetweenButtons={spacingBetweenButtons}
				decreaseFormStep={decreaseFormStep}
				formStep={formStep}
				increaseFormStep={increaseFormStep}
				disablePreviousButton={disablePreviousButton}
				disableNextButton={disableNextButton}
				disableAddQuestionButton={disableAddQuestionButton}
			/>
		</>
	);
}

export default AddFAQ;
