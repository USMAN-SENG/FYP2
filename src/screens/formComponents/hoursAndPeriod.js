import React from "react";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const MIN = 1;
const MAX = 12;

export function HoursAndPeriod({ time, handleTime, period, handleSelect }) {
	return (
		<Grid item md={4}>
			<Grid container justifyContent="center">
				<Grid item>
					<Input
						type="number"
						value={time}
						inputProps={{
							max: MAX,
							min: MIN,
						}}
						sx={{
							mx: "3px",
						}}
						onChange={handleTime}
					></Input>

					<Select value={period} onChange={handleSelect}>
						<MenuItem value={"AM"}>AM</MenuItem>
						<MenuItem value={"PM"}>PM</MenuItem>
					</Select>
				</Grid>
			</Grid>
		</Grid>
	);
}
