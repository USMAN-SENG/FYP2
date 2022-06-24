import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import AppoHeader from "./components/AppoHeader";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

let FAQarray = [
	// { faqID: 0, Q: "How do I apply for an admission and when is the closing date?", A: "To apply for an admission, please register for an online application account via http://eadmission.iium.edu.my/index.php/student/eas_login" },
	// { faqID: 1, Q: "What is the recommendation letter?", A: "Recommendation letter can be provided by someone who knows you personally and academically; however, this is optional" },
	// {
	// 	faqID: 2,
	// 	Q: "What are the major and minor programmes?",
	// 	A: "Info on major or minor are provided by the Kulliyyah that you wish to apply for. So browse our website for the relevant Kulliyyah and contact them directly"
	// },
];

let faqComponent;

let websiteName;

export default function FAQpage() {
	let { ownerEmail } = useParams();
	let navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	useLayoutEffect(() => {
		setLoading(false);
		const displayData = async () => {
			const docRef = doc(db, "owners", ownerEmail);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				if (docSnap.data().officeAddress) {
					// do nothing
				} else {
					// we should navigate to the home page
					navigate("/");
				}

				websiteName = docSnap.data().officeName;
				FAQarray = docSnap.data().FAQ;

				createFaqComponent();
			} else {
				navigate("/");
			}
			setLoading(true);
		};

		displayData();
	}, [ownerEmail]);

	const createFaqComponent = () => {
		setLoading(false);

		faqComponent = FAQarray.map((faq) => (
			<Accordion elevation={24}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id={faq.id}
				>
					<Typography>{faq.Q}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{faq.A}</Typography>
				</AccordionDetails>
			</Accordion>
		));
		setLoading(true);
	};

	return (
		<div>
			{loading ? (
				<>
					<AppoHeader ownerEmail={ownerEmail} websiteName={websiteName} />
					<br />
					<Grid
						container
						spacing={2}
						direction="column"
						justify="center"
						alignItems="center"
						alignContent="center"
						wrap="nowrap"
						p={8}
					>
						<Grid item>
							<Typography variant="h4" align="center">
								Frequently Asked Questions
							</Typography>
						</Grid>
						<Grid item>
							{faqComponent}
							{/* <Accordion elevation={24}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Accordion 1</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion elevation={24}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
						>
							<Typography>Accordion 2</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion disabled elevation={24}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel3a-content"
							id="panel3a-header"
						>
							<Typography>Disabled Accordion</Typography>
						</AccordionSummary>
					</Accordion> */}
						</Grid>
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
