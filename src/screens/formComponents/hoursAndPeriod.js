import React from "react";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const MIN = 1;
const MAX = 24;



export function HoursAndPeriod({ time, handleTime}) {
	return (
		<Grid item md={3}>
			<Grid container justifyContent="center">
				<Grid item>
					<Input
						type="number"
						value={time}
						inputProps={{
							max: MAX,
							min: MIN,
						}}
						onChange={handleTime}
					></Input>

				</Grid>
			</Grid>
		</Grid>
	);
}
