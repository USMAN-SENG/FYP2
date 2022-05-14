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
import { CheckboxDays } from './formComponents/checkboxDays';



const MIN = 1;
const MAX = 12;

export function ChooseWorkHours() {
	//const [period, setPeriod] = useState("AM");
	//const [time, setTime] = useState(7);
	const [sunday, setSunday] = useState(true);
	const [monday, setMonday] = useState(false);
	const [tuesday, setTuesday] = useState(false);
	const [wednesday, setWednesday] = useState(false);
	const [thursday, setThursday] = useState(false);
	const [friday, setFriday] = useState(false);
	const [saturday, setSaturday] = useState(false);
	//const [daysInclude, setDaysInclude] = useState([]);
	let daysIncludeArray = [];

	function addToListOfDays() {
		if (sunday === true) daysIncludeArray.push(0);

		if (monday === true) daysIncludeArray.push(1);
		

		//console.log(daysIncludeArray)
		//alert(daysIncludeArray);
	}

	function changeSundayState() {
		setMonday(!sunday);
	}

	function changeMondayState() {
		setMonday(!monday);
		addToListOfDays();
	}

	function changeTuesdayState() {
		setMonday(!tuesday);
	}

	function changeWednesdayState() {
		setMonday(!wednesday);
	}

	function changeThursdayState() {
		setMonday(!thursday);
	}

	function changeFridayState() {
		setMonday(!friday);
	}

	function changeSaturdayState() {
		setMonday(!saturday);
	}

	// const handleSelect = (event) => {
	// 	setPeriod(event.target.value);
	// };

	// const handleTime = (event) => {
	// 	let newTimeValue = event.target.value;

	// 	if (newTimeValue > MAX) newTimeValue = MAX;
	// 	if (newTimeValue < MIN) newTimeValue = MIN;

	// 	setTime(newTimeValue);
	// };

	return (
		<section>
			<Typography variant="h6" align="center">
				step 1
			</Typography>

			<Typography m={2} variant="h5" align="center">
				Add office working hours
			</Typography>
			
			<CheckboxDays labelDay="Monday"   changeMondayState={changeMondayState}    />
			<br />
			<CheckboxDays labelDay="Tuesday"   changeMondayState={changeMondayState}    />
			<br />
			<CheckboxDays labelDay="Wednesday"   changeMondayState={changeMondayState}    />
			<br />
			<CheckboxDays labelDay="Thursday"   changeMondayState={changeMondayState}    />
			<br />
			<CheckboxDays labelDay="Friday"   changeMondayState={changeMondayState}    />
			<br />
			<CheckboxDays labelDay="Saturday"   changeMondayState={changeMondayState}    />
			<br />
			<CheckboxDays labelDay="Sunday"   changeMondayState={changeMondayState}    />
			<br />
		</section>
	);
}
