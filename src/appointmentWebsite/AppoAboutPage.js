import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppoHeader from "./components/AppoHeader";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";

let officeAddress = "IIUM";
let officeDescription = "If you need to extend your student pass then you must make an application for renewal to EMGS via your institution. Please ensure you apply with sufficient time for processing. It is highly recommended that you submit your application at least 6 weeks before the Student Pass expiry date. You may be required to submit supporting documentation or an explanation letter if the 	extension period you request exceeds the duration of the course you are studying.";

export default function AppoAboutPage() {

	let {ownerEmail} = useParams();  

	return (
		<div>
			<AppoHeader ownerEmail={ownerEmail}/>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				p={8}
			>
				<Grid item>
					<Paper
						elevation={24}
						sx={{ minHeight: "50vh", maxWidth: "100vh" }}
					>
						<Grid
							container
							spacing={1}
							direction="column"
							justifyContent="space-evenly"
							alignItems="center"
							alignContent="center"
							wrap="nowrap"
							p={4}
						>
							<Grid item >
								<Typography variant="h4" align="center">
									ABOUT US
								</Typography>
							</Grid>
							<Grid item >
								<Stack
									direction="row"
									justifyContent="center"
									alignItems="center"
									spacing={2}
								>
									<Typography align="center" variant="h6">
										Address:
									</Typography>
									<Typography align="center" variant="h6">
										{officeAddress}
									</Typography>
								</Stack>

								<br />
								<Typography align="center">{officeDescription}</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
