import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { addNewFAQ } from "../firebase";
import { Alarm } from "@mui/icons-material";

export default function AddNewFAQ({ownerEmail}) {
	let disableSubmitButton = false;

	const [questionInput, setQuestionInput] = useState("");
	const [answerInput, setAnswerInput] = useState("");
	// const [FAQ, setFAQ] = useState();

	// function setNewFaq() {

	// 	setFAQ({
	// 		Q: questionInput,
	// 		A: answerInput,
	// 	});

	// 	///need to move this
	
	// }

  async function sendNewFaqToDatabase(){

    let newFAQ = {
      Q: questionInput,
			A: answerInput,
    };

		try {
      await addNewFAQ(ownerEmail , newFAQ);
      alert("You Successfully Added New FAQ" );  
    } catch(e) {
      console.log(e); // error  
    }

    setQuestionInput("");
		setAnswerInput(""); 
	} 

	if (questionInput === "" || answerInput === "") {
		disableSubmitButton = true;
	}

	return (
		<div>
			<Typography variant="h4" align="center">
				Add New Frequently Asked Questions
			</Typography>
      <br />
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<TextField
					label="Question"
					variant="outlined"
					fullWidth
					multiline
					minRows={1}
					// inputRef={questionRef}
					value={questionInput}
					onChange={(e) => setQuestionInput(e.target.value)}
				/>

				<TextField
					label="Answer"
					variant="outlined"
					fullWidth
					multiline
					minRows={4}
					// inputRef={answerRef}
					value={answerInput}
					onChange={(e) => setAnswerInput(e.target.value)}
				/>

				<Button
					variant="outlined"
					color="primary"
					disabled={disableSubmitButton}
					// onClick={() => {}}
					onClick={() => {sendNewFaqToDatabase()}}
				>
					Submit
				</Button>
			</Stack>
		</div>
	);
}
