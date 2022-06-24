import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppoHeader from "./components/AppoHeader";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

let officeAddress;
let officeDescription;

let websiteName;

export default function AppoAboutPage() {
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
				officeAddress = docSnap.data().officeAddress;
				officeDescription = docSnap.data().officeDescription;
			} else {
				navigate("/");
			}
			setLoading(true);
		};

		displayData();
	}, [ownerEmail]);

	return (
		<div>
			{loading ? (
				<>
					<AppoHeader ownerEmail={ownerEmail} websiteName={websiteName} />
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
								sx={{ minHeight: "50vh", minWidth: "100vh" }}
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
									<Grid item>
										<Typography variant="h4" align="center">
											ABOUT US
										</Typography>
									</Grid>
									<Grid item>
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
				</>
			) : (
				<>
					<p>loading...</p>
				</>
			)}
		</div>
	);
}
