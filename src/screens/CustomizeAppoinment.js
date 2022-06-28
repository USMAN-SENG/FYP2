import { ButtonStep } from "./formComponents/ButtonStep";
import { ChooseWorkHours } from "./ChooseWorkHours";
import { AddFAQ } from "./AddFAQ";
import AddPersonalAbout from "./AddPersonalAbout";
import Transition from "./Transition";

//import { useParams } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../firebase";
import { useState, useLayoutEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function CustomizeAppoinment() {
	const currentUser = useAuth(); // get the info of currentUser
	let navigate = useNavigate();
	const [formStep, setFormStep] = useState(1);
	const [loading, setLoading] = useState(false);

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

	useLayoutEffect(() => {
		const displayData = async () => {
			setLoading(false);
			const docRef = doc(db, "owners", currentUser.email);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				if (docSnap.data().officeAddress) {
					// means already exists
					navigate("/Dashboard/Calendar");
				}
			}

			setLoading(true);
		};

		displayData();
	}, [currentUser]);

	//  0 = sunday , 1 = monday ...
	return (
		<>
			{currentUser ? (
				<>
					{loading ? (
						<>
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
										{formStep === 4 && (
											<Transition
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
						</>
					) : (
						<>
							<p>loading...</p>
						</>
					)}
				</>
			) : (
				<>
					<Stack
						justifyContent="center"
						alignItems="center"
						sx={{ width: "200vh", height: "100vh" }}
					>
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
