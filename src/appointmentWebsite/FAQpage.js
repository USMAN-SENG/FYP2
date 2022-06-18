import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import AppoHeader from "./components/AppoHeader";
import AppoFooter from "./components/AppoFooter";

let FAQarray = [
	{ faqID: 0, Q: "what is it about?", A: "it is a visa offic" },
	{ faqID: 1, Q: "why is it about?", A: "it is a visa offic" },
	{
		faqID: 2,
		Q: "where is it about?",
		A: "it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic",
	},
	{ faqID: 3, Q: "who is it about?", A: "it is a visa offic" },
	{
		faqID: 4,
		Q: "how is it about?",
		A: "it is a visa offic it is a visa offic it is a visa offic",
	},
];

let faqComponent = FAQarray.map((faq) => (
	<Accordion elevation={24}>
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel1a-content"
			id={faq.id}
		>
			<Typography>{faq.Q}</Typography>
		</AccordionSummary>
		<AccordionDetails><Typography>{faq.A}</Typography></AccordionDetails>
	</Accordion>
));

export default function FAQpage() {
	return (
		<div>
			<AppoHeader />
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
					<Accordion elevation={24}>
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
					</Accordion>
				</Grid>
			</Grid>
			<AppoFooter />
		</div>
	);
}
