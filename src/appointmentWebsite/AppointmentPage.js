import React from "react";
import AppoHeader from "./components/AppoHeader";
import { useRef, useState } from "react";
import Calendar from "react-calendar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "react-calendar/dist/Calendar.css";
import { Scheduler } from "@arshadrao/react-scheduler";

export default function AppointmentPage() {
	const [todayDate, setTodayDate] = useState(new Date());
	const [name, setname] = useState("ahmad");
	const [date, setDate] = useState(new Date());

	function handleDate(date) {
		setDate(date);
	}

	// const onChange = date => {
	//   setDate(date);
	// };

	let notIncludeDay = {
		dayArray: [0, 6, 5],
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

	function generateButton () {
		for (var i = 0; i <3 ; i++) {
			return <Button color="inherit">Book</Button> ;
		}
	}

	return (
		<>
			<AppoHeader />

			{/* <div>helloe </div>
      <div>{name} </div>
      <div>{todayDate.toString()} </div> */}
			<Grid container  m={5}>
				<Grid item>
					<Calendar
						tileDisabled={disableDays}
						onChange={handleDate}
						value={date}
					/>
					{date.toString()}
					
				</Grid>
				<Grid item> hellow </Grid>
			</Grid>
			<Scheduler
  view="month"
  events={[
    {
      event_id: 1,
      title: "i want to renew my visa , i had problems for months ",
      start: new Date("2022/6/11 09:30"),
      end: new Date("2022/6/11 14:30"),
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2022/6/11 16:30"),
      end: new Date("2022/6/11 17:30"),
    },
  ]}
/>
		
		</>
	);
}
