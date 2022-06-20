import { ButtonStep } from "./formComponents/ButtonStep";
import { ChooseWorkHours } from "./ChooseWorkHours";
import { AddFAQ } from "./AddFAQ";
import AddPersonalAbout from "./AddPersonalAbout";

//import { useParams } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import { logout, useAuth } from "../firebase";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function CustomizeAppoinment() {

	const currentUser = useAuth(); // get the info of currentUser
	
	const [formStep, setFormStep] = useState(1);

	let spacingBetweenButtons = 50;
	if (formStep === 2) spacingBetweenButtons = 13;
	else spacingBetweenButtons = 50;

	// we can make a function here to send to each step that will later send to the firestore
	// next button can save data and previous can delete data
	function increaseFormStep() {
		setFormStep((previousStep) => previousStep + 1);
	}

	function decreaseFormStep() {
		if (formStep > 1) setFormStep((previousStep) => previousStep - 1);
	}

	// for (let i = 0; i <1; i++) {
	// 	return <CircularProgress /> ;
	// }

	//  0 = sunday , 1 = monday ...
	return (
		<>
			{currentUser ? (
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					sx={{ minHeight: "100vh" }}
				>
					<Grid item>
						<Paper
							elevation={24}
							sx={{ minHeight: "70vh", minWidth: "100vh", m: 5 }}
						>
							{formStep === 1 && (
								<ChooseWorkHours
									spacingBetweenButtons={spacingBetweenButtons}
									decreaseFormStep={decreaseFormStep}
									formStep={formStep}
									increaseFormStep={increaseFormStep}
									ownerEmail={currentUser.email}
								/>
							)}

							{formStep === 2 && (
								<AddFAQ
									spacingBetweenButtons={spacingBetweenButtons}
									decreaseFormStep={decreaseFormStep}
									formStep={formStep}
									increaseFormStep={increaseFormStep}
									ownerEmail={currentUser.email}
								/>
							)}

							{formStep === 3 && (
								<AddPersonalAbout
									spacingBetweenButtons={spacingBetweenButtons}
									decreaseFormStep={decreaseFormStep}
									formStep={formStep}
									increaseFormStep={increaseFormStep}
									ownerEmail={currentUser.email}
								/>
							)}
						</Paper>
					</Grid>
				</Grid>
			) : (
				<> 
					<Stack justifyContent="center" alignItems="center" sx={{ width: '200vh', height: '100vh' }} >		
						<Box sx={{ display: "flex" }}>
							<CircularProgress />
							{/* <Navigate to="/login"/> */}
						</Box>
					</Stack>
					
				</>
			)}
		</>
	);
}
