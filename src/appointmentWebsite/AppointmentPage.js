import React from "react";
import AppoHeader from "./components/AppoHeader";
import { useRef, useState } from "react";
import Calendar from "react-calendar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "react-calendar/dist/Calendar.css";
import { Scheduler } from "@arshadrao/react-scheduler";
import AppoFooter from "./components/AppoFooter";


const hours = [
	// { id: "9:0", hour: 9, minute: 0, endTime: "9:30" , date: '2022-6-11',madeBy:'a' },
	// { id: "9:30", hour: 9, minute: 30, endTime: "10:0" },
	// { id: "10:0", hour: 10, minute: 0, endTime: "10:30" },
];

//we should load all 7 days and then use startHour  base on day chosen 

let startHour = 8; // take it from day , each will be different. we should take base on the day chosen
let endHour = 19; // can't be more than 24
let startMinute = 30;
let endMinute = 30;

for (startHour; startHour < endHour; startHour++) {
	//startMinute = 0;
	for (let j = 1; j < 3; j++) {
		// do it 2 times ,one for 11:00 , another for 11:30
		if (startMinute === 0) {
			startMinute = 30;
			endMinute = 0;

			hours.push({
				id: `${startHour}:${startMinute}`,
				hour: startHour,
				minute: startMinute,
				endTime: `${startHour + 1}:${endMinute}`,
			});
		} else if (startMinute === 30) {
			startMinute = 0;
			endMinute = 30;

			hours.push({
				id: `${startHour}:${startMinute}`,
				hour: startHour,
				minute: startMinute,
				endTime: `${startHour}:${endMinute}`,
			});
		}
	}
}

// we take time from firebase that already booked in certain date, and keep litening to it every time a new write to the database
const hoursAlreadyIncluded = [
	{ id: "9:0", hour: 9, minute: 0 , endTime: "9:30" },
	{ id: "9:30", hour: 9, minute: 30 , endTime: "10:0" },
	{ id: "11:0", hour: 10, minute: 0 , endTime: "11:30" },
	{ id: "11:30", hour: 10, minute: 0 , endTime: "12:0" },
];

hoursAlreadyIncluded.forEach((timeIncluded) => {
	let indexOfTimeThatAlreadyBooked = -1;
	indexOfTimeThatAlreadyBooked = hours.findIndex(
		(hour) => hour.id === timeIncluded.id
	);
	if (indexOfTimeThatAlreadyBooked >= 0) {
		hours.splice(indexOfTimeThatAlreadyBooked, 1);
	}

});



export default function AppointmentPage() {
	const [todayDate, setTodayDate] = useState(new Date());
	const [name, setname] = useState("ahmad");
	const [date, setDate] = useState(new Date());
	// 2022-6-11
	 const [onlyDate,setOnlyDate]= useState(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());

	const[hourChose,setHourChose]=useState();


	function handleDate(date) {
		setDate(date);
		setOnlyDate(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()); 
	}



function displayHours(hourID) {
	console.log(hours);
	setHourChose(hourID);
	console.log(hourChose);
}

const hoursComponent = hours.map((hour) => (
	<Grid item md={2}>
		<Button
			id={hour.id}
			variant="contained"
			color="inherit"
			onClick={()=>displayHours(hour.id)}
		>
			{hour.hour} : {hour.minute}
		</Button>
	</Grid>
));

//	let onlyDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() ;

	let onlyDay = date.getDay() ; // this will give 0-6 sun - sat . we going to use this to find out how the day and go to database to that specific day and get startHour and endHour
	let dayString ;
	if (onlyDay === 0){
		// here we should get startHour and endHour from sunday
		dayString = 'sunday'; 
	} else if(onlyDay === 1){
		dayString = 'monday'; 
	} else if(onlyDay === 2){
		dayString = 'tuesday';  
	}

  

	// notIncludeDay comes from the database
	let notIncludeDay = {
		dayArray: [0,1, 6, 5],
	};
	const disabledDates = [];
	if (notIncludeDay.dayArray.length) {
		for (let i = 0; i < 7; i++) {
			if (i > notIncludeDay.dayArray.length)
				disabledDates.push(disabledDates[0]);
			else disabledDates.push(notIncludeDay.dayArray[i]);
		}
	}

	// sun= 0 , mon = 1 , ...
	function disableDays({ activeStartDate, date, view }) {
		// we take date of each not include day and repeate it
		// we do a for loop to all not include day and then repeat the last value
		return (
			date.getDay() === disabledDates[0] ||
			date.getDay() === disabledDates[1] ||
			date.getDay() === disabledDates[2] ||
			date.getDay() === disabledDates[3] ||
			date.getDay() === disabledDates[4] ||
			date.getDay() === disabledDates[5] ||
			date.getDay() === disabledDates[6]
		); // sun , saturday
	}

	let hourstest = "10:0";

	return (
		<>
			<AppoHeader />

			{/* <div>helloe </div>
      <div>{name} </div>
      <div>{todayDate.toString()} </div> */}
			<Grid container direction="row" p={5} spacing={2}>
				<Grid item md={3}>
					<Calendar
						tileDisabled={disableDays}
						onChange={handleDate}
						value={date}
					/>
					{onlyDate} {dayString} {hourChose}
				</Grid>

				<Grid item md={9}>
					<Grid container direction="row" spacing={2}>
						{hoursComponent}
						<Grid item md={12}></Grid>

						<Grid item md={8}>
							<TextField
								placeholder="why you making the appointment ?"
								variant="outlined"
								fullWidth
								multiline
								minRows={4}
							/>
						</Grid>
						<Grid item md={4}></Grid>
						<Grid item>
							<Button variant="contained" color="primary">submit</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Scheduler
				view="month"
				events={[
					{
						event_id: 1,
						title: "i want to renew my visa , i had problems for months ",
						start: new Date(`2022-6-11 ${hours[0].id}`),
						end: new Date(`2022-6-11 ${hours[0].endTime}`),
					},
					{
						event_id: 2,
						title: "Event 2",
						start: new Date("2022/6/11 16:30"),
						end: new Date("2022/6/11 17:30"),
					},
				]}
			/>
			{/* <AppoFooter /> */}
		</>
	);
}
