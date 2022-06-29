import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ChooseWorkHours } from "../screens/ChooseWorkHours";

export default function UpdateWorkHours({ ownerEmail }) {
	return (
		<div>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				 
			>
				<Grid item>
					<Paper
						elevation={24}
						sx={{ minHeight: "70vh", minWidth: "100vh"  }}
					>
            <ChooseWorkHours ownerEmail={ownerEmail} showButtonStep={false} updateTheDoc={true} showOriginalTitle={false} />
            <br />
          </Paper>
				</Grid>
			</Grid>
		</div>
	);
}
