import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
export function ButtonStep({
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
	disablePreviousButton,
	disableNextButton ,
	disableAddQuestionButton = true,
	submitButton,
	buttonAction= null,
}) {
	// we can add onClick function to each button
	return (
		<Grid
			container
			spacing={spacingBetweenButtons}
			justifyContent="center"
			alignItems="center"
			pb={1}
			
		>
			<Grid item>
				<Button
					variant="outlined"
					onClick={decreaseFormStep}
					disabled={disablePreviousButton}
				>
					Previous
				</Button>
			</Grid>

			{formStep === 2 && (
				<Grid item>
					<Button variant="outlined" disabled={disableAddQuestionButton}>
						Add More Question
					</Button>
				</Grid>
			)}
			<Grid item>
				<Button
					variant="outlined"
					onClick={()=>{
						increaseFormStep();
						if(buttonAction != null)
						buttonAction();
					}}
					disabled={disableNextButton}
				>
					{submitButton || 'Next'}
				</Button>
			</Grid>
		</Grid>
	);
}
