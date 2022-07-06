import { HoursAndPeriod } from './hoursAndPeriod';
import React from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";



export function CheckboxDays({
	labelDay,
	dayState,
	changeDayStates,
	startTime,
	handleStartTime,
	endTime,
	handleEndTime,
}) {

	return (
		<Grid
			container
			spacing={1}
			direction="row"
			justifyContent="center"
			alignItems="center"
		>
			<Grid item md={2}>
				<FormControlLabel
					control={<Checkbox checked={dayState} onChange={changeDayStates} />}
					label={labelDay}
				/>
			</Grid>

			<HoursAndPeriod   time={startTime} handleTime={handleStartTime}  />

			<Grid item md={1}>
				<p>To</p>
			</Grid>
			{/* find a way to start from the next hour  */}

			<HoursAndPeriod   time={endTime} handleTime={handleEndTime} />
			
		</Grid>
	);
}
