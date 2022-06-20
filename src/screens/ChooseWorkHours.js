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
import { ButtonStep } from "./formComponents/ButtonStep";
import {sendDataFromWorkHours} from "../firebase"

const MIN = 1;
const MAX = 24;

// const MIN_START_TIME = 1;
// const MAX_START_TIME = 11;

// const MIN_END_TIME = 2;
// const MAX_END_TIME = 12;

export function ChooseWorkHours( {
	spacingBetweenButtons,
	decreaseFormStep,
	formStep,
	increaseFormStep,
	ownerEmail,
}) {

	//days states
	const [sunday, setSunday] = useState(false);
	const [monday, setMonday] = useState(false);
	const [tuesday, setTuesday] = useState(false);
	const [wednesday, setWednesday] = useState(false);
	const [thursday, setThursday] = useState(false);
	const [friday, setFriday] = useState(false);
	const [saturday, setSaturday] = useState(false);

	// time states
	const [sundayStartTime, setSundayStartTime] = useState(9);
	const [sundayEndTime, setSundayEndTime] = useState(17);
	const [mondayStartTime, setMondayStartTime] = useState(9);
	const [mondayEndTime, setMondayEndTime] = useState(17);
	const [tuesdayStartTime, setTuesdayStartTime] = useState(9);
	const [tuesdayEndTime, setTuesdayEndTime] = useState(17);
	const [wednesdayStartTime, setWednesdayStartTime] = useState(9);
	const [wednesdayEndTime, setWednesdayEndTime] = useState(17);
	const [thursdayStartTime, setThursdayStartTime] = useState(9);
	const [thursdayEndTime, setThursdayEndTime] = useState(17);
	const [fridayStartTime, setFridayStartTime] = useState(9);
	const [fridayEndTime, setFridayEndTime] = useState(17);
	const [saturdayStartTime, setSaturdayStartTime] = useState(9);
	const [saturdayEndTime, setSaturdayEndTime] = useState(17);

	let disablePreviousButton = true;
	let disableNextButton = false;
	 

	//const [daysInclude, setDaysInclude] = useState([]);
	// create variables outside the function 
	// use the function when next button is clicked
	// make sure to initilize all variables to null at the beginning of the function
	// we can make a function in CustomizeAppoinmetn and send it here inside to get the data 
	let notIncludeDays = [];
	let mondayHours={startHour:0, endHour:0};
	let tuesdayHours={startHour:0, endHour:0};
	let wednesdayHours={startHour:0, endHour:0};
	let thursdayHours={startHour:0, endHour:0};
	let fridayHours={startHour:0, endHour:0};
	let saturdayHours={startHour:0, endHour:0};
	let sundayHours={startHour:0, endHour:0};
	
	async function sendWorkHoursToDatabase() {

		if (sunday === true){
			sundayHours.startHour = sundayStartTime ;
			sundayHours.endHour = sundayEndTime ;
		}  
		if (monday === true){
			mondayHours.startHour = mondayStartTime ;
			mondayHours.endHour = mondayEndTime ;
		}
		if (tuesday === true){
			tuesdayHours.startHour = tuesdayStartTime ;
			tuesdayHours.endHour = tuesdayEndTime ;
		} 
		if (wednesday === true){
			wednesdayHours.startHour = wednesdayStartTime ;
			wednesdayHours.endHour = wednesdayEndTime ;
		} 
		if (thursday === true){
			thursdayHours.startHour = thursdayStartTime ;
			thursdayHours.endHour = thursdayEndTime ;
		} 
		if (friday === true){
			fridayHours.startHour = fridayStartTime ;
			fridayHours.endHour = fridayEndTime ;			
		} 
    if (saturday === true){
			saturdayHours.startHour = saturdayStartTime ;
			saturdayHours.endHour = saturdayEndTime ;
		}
		if (sunday === false){
			notIncludeDays.push(0);
		}
		if (monday === false){
			notIncludeDays.push(1);
		}
		if (tuesday === false){
			notIncludeDays.push(2);
		}
		if (wednesday === false){
			notIncludeDays.push(3);
		} 
		if (thursday === false){
			notIncludeDays.push(4);
		}
		if (friday === false){
			notIncludeDays.push(5);
		}
		if (saturday === false){
			notIncludeDays.push(6);
		}

		try {
      await  sendDataFromWorkHours(ownerEmail, mondayHours, tuesdayHours , wednesdayHours , thursdayHours , fridayHours, saturdayHours, sundayHours, notIncludeDays);
    } catch(e) {
      console.log(e); // error  
    }

		// console.log(notIncludeDays);
		// console.log(sundayHours);
		// console.log(mondayHours);
		// console.log(tuesdayHours);
		// console.log(wednesdayHours);
		// console.log(thursdayHours);
		// console.log(fridayHours);
		// console.log(saturdayHours);
	}

	function changeDayStates(day) {
		//console.log(day);

		if (day === "sunday") {
			setSunday(!sunday);
			
		} else if (day === "monday") {
			setMonday(!monday);
			
			
		} else if (day === "tuesday") {
			setTuesday(!tuesday);
			
		} else if (day === "wednesday") {
			setWednesday(!wednesday);
			
		} else if (day === "thursday") {
			setThursday(!thursday);
			
		} else if (day === "friday") {
			setFriday(!friday);
			
		} else if (day === "saturday") {
			setSaturday(!saturday);
			
		}
	}

	
	const handleStartTime = (event, day) => {
		let newTimeValue = Number(event.target.value);
		parseInt(newTimeValue);
		//console.log(mondayStartTime);
		if (newTimeValue > MAX) newTimeValue = MAX;
		if (newTimeValue < MIN) newTimeValue = MIN;
		//console.log(typeof(newTimeValue));

		//let endTiemValue = 1 + newTimeValue;
		// put if statement here
		if (day === "sunday") {
			setSundayStartTime(newTimeValue);
		} else if (day === "monday") {
			setMondayStartTime(newTimeValue);

			//console.log(day , newTimeValue);
		} else if (day === "tuesday") {
			setTuesdayStartTime(newTimeValue);

		} else if (day === "wednesday") {
			setWednesdayStartTime(newTimeValue);
		} else if (day === "thursday") {
			setThursdayStartTime(newTimeValue);
		} else if (day === "friday") {
			setFridayStartTime(newTimeValue);
		} else if (day === "saturday") {
			setSaturdayStartTime(newTimeValue);
		}
	};

	const handleEndTime = (event, day) => {
		let newTimeValue = Number(event.target.value);
		parseInt(newTimeValue);
		//console.log(mondayStartTime);
		if (newTimeValue > MAX) newTimeValue = MAX;
		if (newTimeValue < MIN) newTimeValue = MIN;

		//let startTiemValue = newTimeValue - 1;
		// put if statement here
		if (day === "sunday") {
			setSundayEndTime(newTimeValue);
		} else if (day === "monday") {
			setMondayEndTime(newTimeValue);
		} else if (day === "tuesday") {
			setTuesdayEndTime(newTimeValue);

			//console.log(day , newTimeValue);
		} else if (day === "wednesday") {
			setWednesdayEndTime(newTimeValue);
		} else if (day === "thursday") {
			setThursdayEndTime(newTimeValue);
		} else if (day === "friday") {
			setFridayEndTime(newTimeValue);
		} else if (day === "saturday") {
			setSaturdayEndTime(newTimeValue);
		}
	};

	if(sunday=== false && monday=== false && tuesday=== false && wednesday=== false && thursday=== false && friday=== false && saturday=== false){
		disableNextButton= true;
	}



	return (
		<section>
			<Typography variant="h6" align="center">
				step 1
			</Typography>

			<Typography m={2} variant="h5" align="center">
				Add office working hours
			</Typography>
			

			{/*note:  add one for break time  */}
			<CheckboxDays
				labelDay="Monday"
				dayState={monday}
				changeDayStates={() => changeDayStates("monday")}
				startTime={mondayStartTime}
				handleStartTime={(event) => handleStartTime(event, "monday")}
				endTime={mondayEndTime}
				handleEndTime={(event) => handleEndTime(event, "monday")}
				// startPeriod={mondayStartPeriod}
				// handleStartPeriod={(event) => handleStartSelect(event, "monday")}
				// EndPeriod={mondayEndPeriod}
				// handleEndPeriod={(event) => handleEndSelect(event, "monday")}
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
				// startPeriod={tuesdayStartPeriod}
				// handleStartPeriod={(event) => handleStartSelect(event, "tuesday")}
				// EndPeriod={tuesdayEndPeriod}
				// handleEndPeriod={(event) => handleEndSelect(event, "tuesday")}
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
			<ButtonStep   spacingBetweenButtons={spacingBetweenButtons} decreaseFormStep={decreaseFormStep}  formStep={formStep} increaseFormStep={increaseFormStep} disablePreviousButton={disablePreviousButton} disableNextButton={disableNextButton} nextButtonAction={sendWorkHoursToDatabase} />
		</section>
	);
}
