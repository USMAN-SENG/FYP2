import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, useAuth,sendDataFromFAQ } from "../firebase";

let FAQarray = [];

let faqComponent;

export default function DeleteFAQ() {
	const currentUser = useAuth(); // get the info of currentUser

	let navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const displayData = async () => {
		const docRef = doc(db, "owners", currentUser.email);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			if (docSnap.data().officeAddress) {
				// do nothing
			} else {
				// we should navigate to the home page
				navigate("/");
			}
			FAQarray = docSnap.data().FAQ;

			createFaqComponent();
		} else {
			navigate("/");
		}
		setLoading(true);
	};

	useLayoutEffect(() => {
		setLoading(false);

		displayData();
	}, [currentUser]);

	const createFaqComponent = () => {
		setLoading(false);

		faqComponent = FAQarray.map((faq,i) => (
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<Accordion elevation={24}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id={faq.Q}
					>
						<Typography>{faq.Q}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{faq.A}</Typography>
					</AccordionDetails>
				</Accordion>
				<Button
					variant="outlined"
					color="primary"
					// onClick={() => {}}
					onClick={() => {deleteElementFromFAQarray(i)}}
				>
					Delete
				</Button>
			</Stack>
		));
		setLoading(true);
	};

  function deleteElementFromFAQarray(index){
    setLoading(false);
    FAQarray.splice(index, 1);
    sendFaqToDatabase();
  }

  async function sendFaqToDatabase(){

		try {
      await sendDataFromFAQ(currentUser.email , FAQarray)   
    } catch(e) {
      console.log(e); // error  
    }
    setLoading(true);
    createFaqComponent();
	} 

	return (
		<div>
			{loading ? (
				<>
					
					<Grid
						container
						spacing={2}
						direction="column"
						justify="center"
						alignItems="center"
						alignContent="center"
						p={1}
					>
						<Grid item>
							<Typography variant="h4" align="center">
								Frequently Asked Questions
							</Typography>
						</Grid>
						<Grid item>{faqComponent}</Grid>
					</Grid>
				</>
			) : (
				<>
					<p>loading...</p>
				</>
			)}
		</div>
	);
}
