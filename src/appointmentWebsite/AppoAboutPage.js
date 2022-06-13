import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppoHeader from "./components/AppoHeader";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

let officeAddress = "iium KL";
let officeDescription =
	"it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic it is a visa offic";

export default function AppoAboutPage() {
	return (
		<div>
			<AppoHeader />
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
