import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export function AddFAQ() {
	return (
		<>
			<Typography variant="h6" align="center">
				step 2
			</Typography>

			<Typography m={2} variant="h5" align="center">
				Add FAQ
			</Typography>
			<Grid container direction="column" spacing={2} sx={{ p: 2  }}>
				<Grid item>
					<TextField required  placeholder="Question" variant="outlined" fullWidth multiline minRows={1}/>
				</Grid>
        <Grid item>
					<TextField required  placeholder="Answer" variant="outlined" fullWidth multiline minRows={4} />
				</Grid>
			</Grid>
		</>
	);
}

export default AddFAQ;
