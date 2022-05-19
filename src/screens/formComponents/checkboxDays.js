import { HoursAndPeriod } from './hoursAndPeriod';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import NativeSelect from "@mui/material/NativeSelect";
import Input from "@mui/material/Input";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const MIN = 1;
const MAX = 12;

export function CheckboxDays({
	labelDay,
	dayState,
	changeDayStates,
	startTime,
	handleStartTime,
	endTime,
	handleEndTime,
	startPeriod,
	handleStartPeriod,
	EndPeriod,
	handleEndPeriod,

}) {

	// const [time, setTime] = useState(7);
	const [period, setPeriod] = useState("AM");
	// const [sunday, setSunday] = useState(true);
	// const [monday, setMonday] = useState(true);
	// const [saturday, setSaturday] = useState(false);

	// const handleTime = (event) => {
	// 	let newTimeValue = event.target.value;
	// 	parseInt(newTimeValue);
	// 	console.log(dayState);
	// 	if (newTimeValue > MAX) newTimeValue = MAX;
	// 	if (newTimeValue < MIN) newTimeValue = MIN;

	// 	setTime(newTimeValue);
	// };

	const handleSelect = (event) => {
		setPeriod(event.target.value);
	};

	// function changeMondayState() {
	// 	setMonday(!monday);
		
	// }

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

			<HoursAndPeriod   time={startTime} handleTime={handleStartTime} period={startPeriod} handleSelect={handleStartPeriod}  />

			<Grid item md={1}>
				<p>To</p>
			</Grid>
			{/* find a way to start from the next hour  */}

			<HoursAndPeriod   time={endTime} handleTime={handleEndTime} period={EndPeriod} handleSelect={handleEndPeriod}  />
			
		</Grid>
	);
}
