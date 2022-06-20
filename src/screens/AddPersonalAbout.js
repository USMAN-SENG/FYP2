import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ButtonStep } from "./formComponents/ButtonStep";
import { useRef, useState } from "react";
import {sendDataFromPersonalAbout} from "../firebase"

export default function AddPersonalAbout({
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
	ownerEmail,
}) {

	let disablePreviousButton = false;
	let disableNextButton = false;
	
	// const nameRef = useRef(); // get the name input
  // const addressRef = useRef(); // get the address input
	// const descriptionRef = useRef(); // get the description input

	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [description, setDescription] = useState('');

	async function sendPersonalInfoToDatabase(){

		try {
      await sendDataFromPersonalAbout(ownerEmail , name, address, description);   
    } catch(e) {
      console.log(e); // error  
    }
		// console.log(nameRef.current.value + " " + addressRef.current.value + " " + descriptionRef.current.value );

	} 

	 if(name === "" || address === "" || description === "") disableNextButton = true;

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
						// inputRef={nameRef}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Grid>
				<Grid item>
					<TextField
						label="Address"
						variant="outlined"
						fullWidth
						multiline
						minRows={1}
						// inputRef={addressRef}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</Grid>
				<Grid item>
					<TextField
						label="Description"
						variant="outlined"
						fullWidth
						multiline
						minRows={4}
						// inputRef={descriptionRef}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
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
				nextButtonAction={sendPersonalInfoToDatabase}
			/>
		</>
	);
}
