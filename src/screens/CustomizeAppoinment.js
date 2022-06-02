import { ButtonStep } from "./formComponents/ButtonStep";
import { ChooseWorkHours } from "./ChooseWorkHours";
import {AddFAQ} from "./AddFAQ";

import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
 

export default function CustomizeAppoinment() {
	const [formStep, setFormStep] = useState(1);

	let spacingBetweenButtons = 45;
	if (formStep === 2) spacingBetweenButtons = 11;
	else spacingBetweenButtons = 45;

	let disabledButtons = false;


	function increaseFormStep() {
		setFormStep(previousStep => previousStep + 1);
		
	}

	function decreaseFormStep() {
		if (formStep > 1) setFormStep(previousStep => previousStep - 1);
		
	}

	//  0 = sunday , 1 = monday ...
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ minHeight: "100vh" }}
		>
			<Grid item>
				<Paper elevation={24} sx={{ minHeight: "70vh", minWidth: "100vh" }}>
					<form>
						{formStep === 1 && <ChooseWorkHours spacingBetweenButtons={spacingBetweenButtons} decreaseFormStep={decreaseFormStep}  formStep={formStep} increaseFormStep={increaseFormStep}/>}

						{formStep === 2 && (
							 <AddFAQ spacingBetweenButtons={spacingBetweenButtons} decreaseFormStep={decreaseFormStep}  formStep={formStep} increaseFormStep={increaseFormStep}/>
						)}
					</form>
					{/* <ButtonStep   spacingBetweenButtons={spacingBetweenButtons} decreaseFormStep={decreaseFormStep} disabledButtons={disabledButtons} formStep={formStep} increaseFormStep={increaseFormStep}  /> */}
				</Paper>
			</Grid>
		</Grid>
	);
}
