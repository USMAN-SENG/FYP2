import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ButtonStep } from "./formComponents/ButtonStep";
import { useRef, useState } from "react";

export function AddFAQ({
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
}) {
	//let FAQ =[];

	let disablePreviousButton = false;
	let disableNextButton = false;
	let disableAddQuestionButton = false;

	const questionRef = useRef(); // get the question input
  const answerRef = useRef(); // get the answer input
	const [questionInput, setQuestionInput] = useState('0');
	const [answerInput, setAnswerInput] = useState('1');
	const [FAQ, setFAQ] = useState([]);

	
	function addToFaqArray() {

		setFAQ([...FAQ , {
			faqID: FAQ.length , 
			Q: questionInput, 
			A: answerInput 
		} ]);

		// why didn't work, array kept resetting , maybe because button is in another file
		// FAQ.push(...FAQ ,{  
		// 	faqID: FAQ.length , 
		// 	Q: questionInput, 
		// 	A: answerInput 
		// });

		setQuestionInput('');
		setAnswerInput('');
		
	}

	async function sendFaqToDatabase(){

	} 

	if(FAQ.length < 1){
		disableNextButton = true;
	}
	console.log(FAQ);
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
						label="Question"
						variant="outlined"
						fullWidth
						multiline
						minRows={1}
						// inputRef={questionRef}
						value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}

					/>
				</Grid>
				<Grid item>
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
				addFaqButtonAction={addToFaqArray}
			/>
		</>
	);
}

export default AddFAQ;
