import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { sendDataFromPersonalAbout } from "../firebase";

export default function UpdateInfo({ ownerEmail }) {
	let disableSubmitButton = false;

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [description, setDescription] = useState("");

	async function sendPersonalInfoToDatabase() {
		try {
			await sendDataFromPersonalAbout(ownerEmail, name, address, description);
      alert("You Successfully Updated Your Information" ); 
		} catch (e) {
			console.log(e); // error
		}
	}

	if (name === "" || address === "" || description === "")
		disableSubmitButton = true;
	return (
		<div>
			<Typography variant="h4" align="center">
				Update Your Info
			</Typography>
			<br />
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
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

				<Button
					variant="outlined"
					color="primary"
					disabled={disableSubmitButton}
					// onClick={() => {}}
					onClick={() => {
						sendPersonalInfoToDatabase();
					}}
				>
					Submit
				</Button>
			</Stack>
		</div>
	);
}
