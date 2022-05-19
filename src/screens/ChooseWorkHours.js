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
import { CheckboxDays } from "./formComponents/checkboxDays";

const MIN = 1;
const MAX = 12;

const MIN_START_TIME = 1;
const MAX_START_TIME = 11;

const MIN_END_TIME = 2;
const MAX_END_TIME = 12;

export function ChooseWorkHours() {
	//const [period, setPeriod] = useState("AM");
	//const [time, setTime] = useState(7);
	//days states
	const [sunday, setSunday] = useState(false);
	const [monday, setMonday] = useState(false);
	const [tuesday, setTuesday] = useState(false);
	const [wednesday, setWednesday] = useState(false);
	const [thursday, setThursday] = useState(false);
	const [friday, setFriday] = useState(false);
	const [saturday, setSaturday] = useState(false);
	// period states
	const [sundayStartPeriod, setSundayStartPeriod] = useState("AM");
	const [sundayEndPeriod, setSundayEndPeriod] = useState("AM");
	const [mondayStartPeriod, setMondayStartPeriod] = useState("AM");
	const [mondayEndPeriod, setMondayEndPeriod] = useState("AM");
	const [tuesdayStartPeriod, setTuesdayStartPeriod] = useState("AM");
	const [tuesdayEndPeriod, setTuesdayEndPeriod] = useState("AM");
	const [wednesdayStartPeriod, setWednesdayStartPeriod] = useState("AM");
	const [wednesdayEndPeriod, setWednesdayEndPeriod] = useState("AM");
	const [thursdayStartPeriod, setThursdayStartPeriod] = useState("AM");
	const [thursdayEndPeriod, setThursdayEndPeriod] = useState("AM");
	const [fridayStartPeriod, setFridayStartPeriod] = useState("AM");
	const [fridayEndPeriod, setFridayEndPeriod] = useState("AM");
	const [saturdayStartPeriod, setSaturdayStartPeriod] = useState("AM");
	const [saturdayEndPeriod, setSaturdayEndPeriod] = useState("AM");
	// time states
	const [sundayStartTime, setSundayStartTime] = useState(7);
	const [sundayEndTime, setSundayEndTime] = useState(sundayStartTime + 1);
	const [mondayStartTime, setMondayStartTime] = useState(7);
	const [mondayEndTime, setMondayEndTime] = useState(mondayStartTime + 1);
	const [tuesdayStartTime, setTuesdayStartTime] = useState(7);
	const [tuesdayEndTime, setTuesdayEndTime] = useState(tuesdayStartTime + 1);
	const [wednesdayStartTime, setWednesdayStartTime] = useState(7);
	const [wednesdayEndTime, setWednesdayEndTime] = useState(wednesdayStartTime + 1);
	const [thursdayStartTime, setThursdayStartTime] = useState(7);
	const [thursdayEndTime, setThursdayEndTime] = useState(thursdayStartTime + 1);
	const [fridayStartTime, setFridayStartTime] = useState(7);
	const [fridayEndTime, setFridayEndTime] = useState(fridayStartTime + 1);
	const [saturdayStartTime, setSaturdayStartTime] = useState(7);
	const [saturdayEndTime, setSaturdayEndTime] = useState(saturdayStartTime + 1);

	//const [daysInclude, setDaysInclude] = useState([]);
	let daysIncludeArray = [];

	function addToListOfDays() {
		console.log(sunday);
		// if (sunday === true) daysIncludeArray.push(0);

		// if (monday === true) daysIncludeArray.push(1);

		//console.log(daysIncludeArray)
		//alert(daysIncludeArray);
	}

	function changeDayStates(day) {
		console.log(day);

		if (day === "sunday") {
			setSunday(!sunday);
			console.log(sunday);
		} else if (day === "monday") {
			setMonday(!monday);
			console.log(monday);
			//addToListOfDays();
		} else if (day === "tuesday") {
			setTuesday(!tuesday);
			console.log(tuesday);
		} else if (day === "wednesday") {
			setWednesday(!wednesday);
			console.log(wednesday);
		} else if (day === "thursday") {
			setThursday(!thursday);
			console.log(thursday);
		} else if (day === "friday") {
			setFriday(!friday);
			console.log(friday);
		} else if (day === "saturday") {
			setSaturday(!saturday);
			console.log(saturday);
		}
	}

	// function changeSundayState() {

	// 	console.log('sunday');
	// 	console.log(sunday);
	// 	setSunday(!sunday);
	// 	// if(sunday===false)
	// 	// setSunday(true);
	// 	// if(sunday===true)
	// 	// setSunday(false);
	// 	console.log(sunday);
	// 	// addToListOfDays()
	// }

	// function changeMondayState() {
	// 	setMonday(!monday);
	// 	addToListOfDays();
	// }

	// function changeTuesdayState() {
	// 	setMonday(!tuesday);
	// }

	// function changeWednesdayState() {
	// 	setMonday(!wednesday);
	// }

	// function changeThursdayState() {
	// 	setMonday(!thursday);
	// }

	// function changeFridayState() {
	// 	setMonday(!friday);
	// }

	// function changeSaturdayState() {
	// 	setMonday(!saturday);
	// }

	// const handleSelect = (event) => {
	// 	setPeriod(event.target.value);
	// };

	// const handleTime = (event) => {
	// 	let newTimeValue = event.target.value;

	// 	if (newTimeValue > MAX) newTimeValue = MAX;
	// 	if (newTimeValue < MIN) newTimeValue = MIN;

	// 	setTime(newTimeValue);
	// };

	const handleStartTime = (event, day) => {
		let newTimeValue = Number(event.target.value);
		parseInt(newTimeValue);
		//console.log(mondayStartTime);
		if (newTimeValue > MAX_START_TIME) newTimeValue = MAX_START_TIME;
		if (newTimeValue < MIN_START_TIME) newTimeValue = MIN_START_TIME;
		//console.log(typeof(newTimeValue));

		let endTiemValue = 1 + newTimeValue;
		// put if statement here
		if (day === "sunday") {
			setSundayStartTime(newTimeValue);
			setSundayEndTime(endTiemValue);
		} else if (day === "monday") {
			setMondayStartTime(newTimeValue);
			setMondayEndTime(endTiemValue);
			//console.log(day , newTimeValue);
		} else if (day === "tuesday") {
			setTuesdayStartTime(newTimeValue);
			setTuesdayEndTime(endTiemValue);
			//console.log(day , newTimeValue);
		} else if (day === "wednesday") {
			setWednesdayStartTime(newTimeValue);
			setWednesdayEndTime(endTiemValue);
		} else if (day === "thursday") {
			setThursdayStartTime(newTimeValue);
			setThursdayEndTime(endTiemValue);
		} else if (day === "friday") {
			setFridayStartTime(newTimeValue);
			setFridayEndTime(endTiemValue);
		} else if (day === "saturday") {
			setSaturdayStartTime(newTimeValue);
			setSaturdayEndTime(endTiemValue);
		}
	};

	const handleEndTime = (event, day) => {
		let newTimeValue = Number(event.target.value) ;
		parseInt(newTimeValue);
		//console.log(mondayStartTime);
		if (newTimeValue > MAX_END_TIME) newTimeValue = MAX_END_TIME;
		if (newTimeValue < MIN_END_TIME) newTimeValue = MIN_END_TIME;

		let startTiemValue = newTimeValue - 1;
		// put if statement here
		if (day === "sunday") {
			setSundayEndTime(newTimeValue);
			setSundayStartTime(startTiemValue);
		} else if (day === "monday") {
			setMondayEndTime(newTimeValue);
			setMondayStartTime(startTiemValue);
		} else if (day === "tuesday") {
			setTuesdayEndTime(newTimeValue);
			setTuesdayStartTime(startTiemValue);
			//console.log(day , newTimeValue);
		} else if (day === "wednesday") {
			setWednesdayEndTime(newTimeValue);
			setWednesdayStartTime(startTiemValue);
		} else if (day === "thursday") {
			setThursdayEndTime(newTimeValue);
			setThursdayStartTime(startTiemValue);
		} else if (day === "friday") {
			setFridayEndTime(newTimeValue);
			setFridayStartTime(startTiemValue);
		} else if (day === "saturday") {
			setSaturdayEndTime(newTimeValue);
			setSaturdayStartTime(startTiemValue);
		}
	};

	return (
		<section>
			<Typography variant="h6" align="center">
				step 1
			</Typography>

			<Typography m={2} variant="h5" align="center">
				Add office working hours
			</Typography>

			<CheckboxDays
				labelDay="Monday"
				dayState={monday}
				changeDayStates={() => changeDayStates("monday")}
				startTime={mondayStartTime}
				handleStartTime={(event) => handleStartTime(event, "monday")}
				endTime={mondayEndTime}
				handleEndTime={(event) => handleEndTime(event, "monday")}
			/>
			<br />
			<CheckboxDays
				labelDay="Tuesday"
				dayState={tuesday}
				changeDayStates={() => changeDayStates("tuesday")}
				startTime={tuesdayStartTime}
				handleStartTime={(event) => handleStartTime(event, "tuesday")}
				endTime={tuesdayEndTime}
				handleEndTime={(event) => handleEndTime(event, "tuesday")}
			/>
			<br />
			<CheckboxDays
				labelDay="Wednesday"
				dayState={wednesday}
				changeDayStates={() => changeDayStates("wednesday")}
				startTime={wednesdayStartTime}
				handleStartTime={(event) => handleStartTime(event, "wednesday")}
				endTime={wednesdayEndTime}
				handleEndTime={(event) => handleEndTime(event, "wednesday")}
			/>
			<br />
			<CheckboxDays
				labelDay="Thursday"
				dayState={thursday}
				changeDayStates={() => changeDayStates("thursday")}
				startTime={thursdayStartTime}
				handleStartTime={(event) => handleStartTime(event, "thursday")}
				endTime={thursdayEndTime}
				handleEndTime={(event) => handleEndTime(event, "thursday")}
			/>
			<br />
			<CheckboxDays
				labelDay="Friday"
				dayState={friday}
				changeDayStates={() => changeDayStates("friday")}
				startTime={fridayStartTime}
				handleStartTime={(event) => handleStartTime(event, "friday")}
				endTime={fridayEndTime}
				handleEndTime={(event) => handleEndTime(event, "friday")}
			/>
			<br />
			<CheckboxDays
				labelDay="Saturday"
				dayState={saturday}
				changeDayStates={() => changeDayStates("saturday")}
				startTime={saturdayStartTime}
				handleStartTime={(event) => handleStartTime(event, "saturday")}
				endTime={saturdayEndTime}
				handleEndTime={(event) => handleEndTime(event, "saturday")}
			/>
			<br />
			<CheckboxDays
				labelDay="Sunday"
				dayState={sunday}
				changeDayStates={() => changeDayStates("sunday")}
				startTime={sundayStartTime}
				handleStartTime={(event) => handleStartTime(event, "sunday")}
				endTime={sundayEndTime}
				handleEndTime={(event) => handleEndTime(event, "sunday")}
			/>
			<br />
		</section>
	);
}
