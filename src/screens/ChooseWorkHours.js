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

export function ChooseWorkHours({ hours }) {
	const [period, setPeriod] = useState("AM");
	const [time, setTime] = useState(7);
	const [sunday, setSunday] = useState(true);
	const [monday, setMonday] = useState(true);
	const [saturday, setSaturday] = useState(false)
	const [daysInclude,setDaysInclude] = useState([])
	let daysIncludeArray = daysInclude ;

	function addToListOfDays() {

		if(sunday===true)
			daysIncludeArray.push(0)

		if(monday===true)
			daysIncludeArray.push(1)

		//console.log(daysIncludeArray)
		alert(daysIncludeArray);
	}
	
	function changeMondayState() {
		setMonday(!monday);
		addToListOfDays();
	}


	const handleSelect = (event) => {
		setPeriod(event.target.value);
	};

	const handleTime = (event) => {
		let newTimeValue = event.target.value;

		if (newTimeValue > MAX) newTimeValue = MAX;
		if (newTimeValue < MIN) newTimeValue = MIN;

		setTime(newTimeValue);
	};

	return (
		<section>
			<Typography variant="h6" align="center">
				step 1
			</Typography>

			<Typography m={2} variant="h5" align="center">
				Add office working hours
			</Typography>
			<Grid
				container
				spacing={1}
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item md={2}>
					<FormControlLabel control={<Checkbox checked={monday} 
					onChange={changeMondayState} />} label="Monday" />
				</Grid>

				<Grid item md={4}>
					<Grid container justifyContent="center">
						<Grid item>
							<Input
								type="number"
								value={time}
								inputProps={{ max: MAX, min: MIN }}
								sx={{ mx: "6px" }}
								onChange={handleTime}
							></Input>

							<Select value={period} onChange={handleSelect}>
								<MenuItem value={"AM"}>AM</MenuItem>
								<MenuItem value={"PM"}>PM</MenuItem>
							</Select>
						</Grid>
					</Grid>
				</Grid>

				<Grid item md={1}>
					<p>To</p>
				</Grid>
				{/* find a way to start from the next hour  */}

				<Grid item md={4}>
					<NativeSelect>
						{hours.map((hours) => (
							<option value={hours}>{hours}</option>
						))}
					</NativeSelect>
				</Grid>
			</Grid>
		</section>
	);
}
