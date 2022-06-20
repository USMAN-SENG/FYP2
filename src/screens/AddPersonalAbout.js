import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ButtonStep } from "./formComponents/ButtonStep";
import { useRef, useState } from "react";

export default function AddPersonalAbout({
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
	ownerEmail,
}) {

	let disablePreviousButton = false;
	let disableNextButton = false;
	
	const nameRef = useRef(); // get the question input
  const addressRef = useRef(); // get the answer input
	const descriptionRef = useRef(); // get the answer input

	async function sendPersonalInfoToDatabase(){

		console.log(nameRef.current.value + " " + addressRef.current.value + " " + descriptionRef.current.value );

	} 

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
						label="Name"
						variant="outlined"
						fullWidth
						multiline
						minRows={1}
						inputRef={nameRef}
					/>
				</Grid>
				<Grid item>
					<TextField
						label="Address"
						variant="outlined"
						fullWidth
						multiline
						minRows={1}
						inputRef={addressRef}
					/>
				</Grid>
				<Grid item>
					<TextField
						label="Description"
						variant="outlined"
						fullWidth
						multiline
						minRows={4}
						inputRef={descriptionRef}
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
				nextButtonAction={sendPersonalInfoToDatabase}
			/>
		</>
	);
}
