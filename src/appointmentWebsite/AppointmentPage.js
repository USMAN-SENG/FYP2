import React from "react";
import AppoHeader from "./components/AppoHeader";
import { useRef, useState, useEffect,useLayoutEffect} from "react";
import Calendar from "react-calendar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "react-calendar/dist/Calendar.css";
import { Scheduler } from "@arshadrao/react-scheduler";
import AppoFooter from "./components/AppoFooter";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// const hours = [
// 	// { id: "9:0", hour: 9, minute: 0, endTime: "9:30" , date: '2022-6-11',madeBy:'a' },
// 	// { id: "9:30", hour: 9, minute: 30, endTime: "10:0" },
// 	// { id: "10:0", hour: 10, minute: 0, endTime: "10:30" },
// ];

// //we should load all 7 days and then use startHour  base on day chosen

// let startHour = 8; // take it from day , each will be different. we should take base on the day chosen
// let endHour = 19; // can't be more than 24
// let startMinute = 30;
// let endMinute = 30;

// for (startHour; startHour < endHour; startHour++) {
// 	//startMinute = 0;
// 	for (let j = 1; j < 3; j++) {
// 		// do it 2 times ,one for 11:00 , another for 11:30
// 		if (startMinute === 0) {
// 			startMinute = 30;
// 			endMinute = 0;

// 			hours.push({
// 				id: `${startHour}:${startMinute}`,
// 				hour: startHour,
// 				minute: startMinute,
// 				endTime: `${startHour + 1}:${endMinute}`,
// 			});
// 		} else if (startMinute === 30) {
// 			startMinute = 0;
// 			endMinute = 30;

// 			hours.push({
// 				id: `${startHour}:${startMinute}`,
// 				hour: startHour,
// 				minute: startMinute,
// 				endTime: `${startHour}:${endMinute}`,
// 			});
// 		}
// 	}
// }

// we take time from firebase that already booked in certain date, and keep litening to it every time a new write to the database
// const hoursAlreadyIncluded = [
// 	{ id: "9:0", hour: 9, minute: 0, endTime: "9:30" }, //should add date
// 	{ id: "9:30", hour: 9, minute: 30, endTime: "10:0" },
// 	{ id: "11:0", hour: 10, minute: 0, endTime: "11:30" },
// 	{ id: "11:30", hour: 10, minute: 0, endTime: "12:0" },
// ];

// hoursAlreadyIncluded.forEach((timeIncluded) => {
// 	let indexOfTimeThatAlreadyBooked = -1;
// 	indexOfTimeThatAlreadyBooked = hours.findIndex(
// 		(hour) => hour.id === timeIncluded.id
// 	);
// 	if (indexOfTimeThatAlreadyBooked >= 0) {
// 		hours.splice(indexOfTimeThatAlreadyBooked, 1);
// 	}
// });
let availableHours=[];
let hoursComponent ;
let sundayHours ;
let mondayHours ;
let tuesdayHours;
let wednesdayHours;
let thursdayHours;
let fridayHours;
let saturdayHours;
let startHour=0;
let endHour=0;
let onlyDayNumber;


export default function AppointmentPage() {
	let { ownerEmail } = useParams();

	const [loading, setLoading] = useState(false);

	//console.log(ownerEmail);
	//let notIncludeDays=[];
	const [notIncludeDays, setNotIncludeDays] = useState([]);

	///////////////

	// const [sundayHours, setSundayHours] = useState({startHour:0 ,endHour:0});
	// const [mondayHours, setMondayHours] = useState({startHour:0 ,endHour:0});
	// const [tuesdayHours, setTuesdayHours] = useState({startHour:0 ,endHour:0});
	// const [wednesdayHours, setWednesdayHours] = useState({startHour:0 ,endHour:0});
	// const [thursdayHours, setThursdayHours] = useState({startHour:0 ,endHour:0});
	// const [fridayHours, setFridayHours] = useState({startHour:0 ,endHour:0});
	// const [saturdayHours, setSaturdayHours] = useState({startHour:0 ,endHour:0});

	//////////////

	// const [startHourState, setStartHour] = useState(0);
	// const [endHourState, setEndHour] = useState(0);

	//const [availableHoursState, setAvailableHoursState] = useState([]);
	
	//let startHour = 8; // take it from day , each will be different. we should take base on the day chosen
	//let endHour = 19; // can't be more than 24
	//let startMinute = 30;
	//let endMinute = 30;

	///////////
	const [dateState, setDateState] = useState(new Date());
	// 2022-6-11
	const [onlyDate, setOnlyDate] = useState(
		dateState.getFullYear() + "-" + (dateState.getMonth() + 1) + "-" + dateState.getDate()
	);

	onlyDayNumber= dateState.getDay();
	const [onlyDay, setOnlyDay] = useState(dateState.getDay());
	//let onlyDay = date.getDay(); // this will give 0-6 sun - sat . we going to use this to find out how the day and go to database to that specific day and get startHour and endHour
	const [dayString, setDayString] = useState("");

	useEffect(() => {
		setLoading(false);
		const changeDayString = () => {
			if (onlyDayNumber === 0) {
				setDayString("sunday");
			} else if (onlyDayNumber === 1) {
				setDayString("monday");
			} else if (onlyDayNumber === 2) {
				setDayString("tuesday");
			} else if (onlyDayNumber === 3) {
				setDayString("wednesday");
			} else if (onlyDayNumber === 4) {
				setDayString("thursday");
			} else if (onlyDayNumber === 5) {
				setDayString("friday");
			} else if (onlyDayNumber === 6) {
				setDayString("saturday");
			}
			console.log("onlyDayNumber is in changeDayString" + onlyDayNumber);
 
			setLoading(true);
		};

		changeDayString();
	}, [onlyDayNumber]);

	function handleDate(date) {
		setDateState(date);
		setOnlyDate(
			date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
		);
		
		onlyDayNumber= date.getDay();
		console.log("onlyDayNumber is in handledate" + onlyDayNumber);
		setOnlyDay(date.getDay());
		console.log("day is in handledate" + onlyDay);
		//setOnlyDay(date.getDay());
		
	}

	// function handleDay() {
		 
	// 	onlyDayNumber= getCurrentDate.getDay();
	// 	console.log("onlyDayNumber is in handleday ////" + onlyDayNumber);
	// 	setOnlyDay(getCurrentDate.getDay());
	// 	console.log("day is in handleday ////" + onlyDayNumber);
	// 	//setOnlyDay(date.getDay());
	// }
	////////////////////////

	useLayoutEffect(() => {
		setLoading(false);
		const displayData = async () => {
			const docRef = doc(db, "owners", ownerEmail);
			const docSnap = await getDoc(docRef);
			// const data = docSnap.data();
			// return data;
			if (docSnap.exists()) {
				// console.log("Document data:", docSnap.data());
				// console.log("FAQ :", docSnap.data().FAQ);
				 console.log("officeAddress :", docSnap.data().officeAddress);
				// console.log("mondayHours :", docSnap.data().mondayHours.startHour);
				// console.log("notIncludeDays array :", docSnap.data().notIncludeDays);
				//console.log("test something that don't exist :", docSnap.data().office); //undefined , we can use this sign up or log in to direct them
				setNotIncludeDays(docSnap.data().notIncludeDays);
				sundayHours= docSnap.data().sundayHours ;
				mondayHours= docSnap.data().mondayHours ;
				tuesdayHours= docSnap.data().tuesdayHours ;
				wednesdayHours= docSnap.data().wednesdayHours ;
				thursdayHours= docSnap.data().thursdayHours ;
				fridayHours= docSnap.data().fridayHours ;
				saturdayHours= docSnap.data().saturdayHours ;
				// setSundayHours({
				// 	startHour:docSnap.data().sundayHours.startHour ,
				// 	endHour:docSnap.data().sundayHours.endHour
				// });
				//  setMondayHours( {
				// 	startHour:docSnap.data().mondayHours.startHour ,
				// 	endHour:docSnap.data().mondayHours.endHour
				//  });
				// setTuesdayHours( {
				// 	startHour:docSnap.data().tuesdayHours.startHour,
				// 	endHour:docSnap.data().tuesdayHours.endHour
				// });
				//  setWednesdayHours({
				// 	startHour:docSnap.data().wednesdayHours.startHour,
				// 	endHour:docSnap.data().wednesdayHours.endHour
				//  });
				 console.log("start hour: wednesdayHours" + wednesdayHours.startHour);
				//  setThursdayHours({
				// 	startHour:docSnap.data().thursdayHours.startHour,
				// 	endHour:docSnap.data().thursdayHours.endHour
				//  });
				// setFridayHours({
				// 	startHour:docSnap.data().fridayHours.startHour,
				// 	endHour:docSnap.data().fridayHours.endHour
				// });
				// setSaturdayHours({
				// 	startHour:docSnap.data().saturdayHours.startHour,
				// 	endHour:docSnap.data().saturdayHours.endHour
				// });

				changeStartEndHour();

				// let someObject={
				// 	email: "some email",
				// 	firstName: " some fname",
				// 	lastName: "some lname",
				// }
			
				// setTuesdayHours(someObject);

				// if (docSnap.data().officeAddress) {
				// 	return; // we should navigate to the sign up page
				// } else {
				// 	// we should navigate to the sign up page
				// }
			} else {
				// doc.data() will be undefined in this case
				// we should navigate to the sign up page
				console.log("No such document!");
			}
			setLoading(true);
		};

		displayData();
		
	}, [ownerEmail]);



//	console.log("notIncludeDays state:" + notIncludeDays);
//	console.log("tuesdayHours state:" + tuesdayHours.startHour);

	////////////////////// disable days
	// notIncludeDay comes from the database disabledDays
	// let notIncludeDay = {
	// 	dayArray: [0, 1, 6, 5],
	// };
	const disabledDays = [];
	if (notIncludeDays.length) {
		// if there is disabled day
		for (let i = 0; i < 7; i++) {
			// we need to fill all 7 element
			if (i > notIncludeDays.length) disabledDays.push(disabledDays[0]);
			else disabledDays.push(notIncludeDays[i]);
		}
	}

	// sun= 0 , mon = 1 , ...
	function disableDays({ activeStartDate, date, view }) {
		// we take date of each not include day and repeate it
		// we do a for loop to all not include day and then repeat the last value
		return (
			date.getDay() === disabledDays[0] ||
			date.getDay() === disabledDays[1] ||
			date.getDay() === disabledDays[2] ||
			date.getDay() === disabledDays[3] ||
			date.getDay() === disabledDays[4] ||
			date.getDay() === disabledDays[5] ||
			date.getDay() === disabledDays[6]
		); // sun , saturday
	}

	///////////// get the day chosen and find out start hours and end hours

	//put inside useEffect

	const changeStartEndHour = () => {
		
		console.log("changeStartEndHour//////////:");
		if (onlyDayNumber === 0) {
			// here we should get startHour and endHour from sunday
			startHour = sundayHours.startHour ;
			endHour = sundayHours.endHour ;
			// setStartHour(sundayHours.startHour);
			// setEndHour(sundayHours.endHour);
			
		} else if (onlyDayNumber === 1) {

			startHour = mondayHours.startHour ;
			endHour = mondayHours.endHour ;
			// setStartHour(mondayHours.startHour);
			// setEndHour(mondayHours.endHour);
		} else if (onlyDayNumber === 2) {

			startHour = tuesdayHours.startHour ;
			endHour = tuesdayHours.endHour ;
			// setStartHour(tuesdayHours.startHour);
			// setEndHour(tuesdayHours.endHour);
		} else if (onlyDayNumber === 3) {

			startHour = wednesdayHours.startHour;
			endHour = wednesdayHours.endHour;

			// setStartHour(()=>wednesdayHours.startHour);
			// setEndHour(wednesdayHours.endHour);
			//console.log("start hour: wednesdayHours" + startHour);
			
		} else if (onlyDayNumber === 4) {

			startHour = thursdayHours.startHour;
			endHour = thursdayHours.endHour;
			// setStartHour(()=>thursdayHours.startHour);
			// setEndHour(thursdayHours.endHour);
			//console.log("start hour: thursdayHours" + startHour);
		} else if (onlyDayNumber === 5) {

			startHour = fridayHours.startHour;
			endHour = fridayHours.endHour;
			// setStartHour(fridayHours.startHour);
			// setEndHour(fridayHours.endHour);
		} else if (onlyDayNumber === 6) {

			startHour = saturdayHours.startHour;
			endHour = saturdayHours.endHour;
			// setStartHour(saturdayHours.startHour);
			// setEndHour(saturdayHours.endHour);
		}
		console.log("onlyDayNumber in changeStartEndHour " + onlyDayNumber);
		console.log("day in changeStartEndHour " + onlyDay);
		console.log("start hour wednesdayHours.startHour" + wednesdayHours.startHour);
		console.log("start hour mondayHours.startHour" + mondayHours.startHour);
		console.log("start hour after if statements" + startHour);
		//console.log("start hour state after if statements" + startHourState);
		addToAvailableHours();
		
		setLoading(true);
	};

	// useLayoutEffect(() => {
	// 	setLoading(false);
		
	// 	//changeStartEndHour();

	// }, [onlyDay,startHour, endHour]);

		// console.log("start hour:" + startHour);
	  // console.log("end hour:" + endHour);

	//const hours = [
	// { id: "9:0", hour: 9, minute: 0, endTime: "9:30" , date: '2022-6-11',madeBy:'a' },
	// { id: "9:30", hour: 9, minute: 30, endTime: "10:0" },
	// { id: "10:0", hour: 10, minute: 0, endTime: "10:30" },
	//];

	//we should load all 7 days and then use startHour  base on day chosen
	
	const addToAvailableHours = () => {
		console.log("inside addToAvailableHours function:" );
		availableHours=[]
		let copyOfStartHour = startHour;
		let copyOfStartMinute = 30;
		let copyOfEndMinute = 30;
		let i = 0 ;
		let index = 0 ;
		for (copyOfStartHour; copyOfStartHour < endHour; copyOfStartHour++) {
			console.log("inside for loop "+ i);
			//startMinute = 0;
			
			for (let j = 1; j < 3; j++) {
				// do it 2 times ,one for 11:00 , another for 11:30
				if (copyOfStartMinute === 0) {

					copyOfStartMinute = 30;
					copyOfEndMinute = 0;
					// setAvailableHoursState(...availableHoursState, {
					// 	id: `${copyOfStartHour}:${copyOfStartMinute}`,
					// 	hour: copyOfStartHour,
					// 	minute: copyOfStartMinute,
					// 	endTime: `${copyOfStartHour + 1}:${copyOfEndMinute}`,
					// });

					availableHours.push({
						id: `${copyOfStartHour}:${copyOfStartMinute}`,
						hour: copyOfStartHour,
						minute: copyOfStartMinute,
						endTime: `${copyOfStartHour + 1}:${copyOfEndMinute}`,
					});

					//console.log("startMinute === 0 " + availableHours[index].id);

				} else if (copyOfStartMinute === 30) {

					copyOfStartMinute = 0;
					copyOfEndMinute = 30;
					// setAvailableHoursState(...availableHoursState, {
					// 	id: `${copyOfStartHour}:${copyOfStartMinute}`,
					// 	hour: copyOfStartHour,
					// 	minute: copyOfStartMinute,
					// 	endTime: `${copyOfStartHour}:${copyOfEndMinute}`,
					// });

					availableHours.push({
						id: `${copyOfStartHour}:${copyOfStartMinute}`,
						hour: copyOfStartHour,
						minute: copyOfStartMinute,
						endTime: `${copyOfStartHour}:${copyOfEndMinute}`,
					});

					//console.log("startMinute === 30 " + availableHours[index].id);
				}

				index=index+1;
			}
			
			//console.log("availableHours after: " + availableHours[i].id);
			i++;
		}
		createHourComponent();
		setLoading(true);
	};
	
	//put inside useEffect

	// useLayoutEffect(() => {
	// 	setLoading(false);

	// 	addToAvailableHours();

	// 	//console.log("availableHours array from addToAvailableHours:" + availableHours);
	// }, [startHour, endHour,onlyDay]);

	//console.log("availableHours array outside addToAvailableHours:" + availableHours);
	////////////////////

	// const [date, setDate] = useState(new Date());
	// // 2022-6-11
	// const [onlyDate, setOnlyDate] = useState(
	// 	date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
	// );

	const [hourChose, setHourChose] = useState();

	// function handleDate(date) {
	// 	setDate(date);
	// 	setOnlyDate(
	// 		date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
	// 	);
	// }

	function displayHours(hourID) {
	//	console.log(availableHours);
		setHourChose(hourID);
	//console.log(hourChose);
	}

	const createHourComponent = () => {
		console.log("inside createHourComponent function:" );
		setLoading(false);
		console.log(availableHours);
		//console.log(availableHoursState);
		let copyOfAvailableHours = availableHours;

		hoursComponent = copyOfAvailableHours.map((hour) => (
			<Grid item md={2} key={hour.id}>
				<Button
					id={hour.id}
					variant="contained"
					color="inherit"
					onClick={() => {displayHours(hour.id)}}
				>
					{hour.hour} : {hour.minute}
				</Button>
			</Grid>
		));
		setLoading(true);
	};

	
	
	// useLayoutEffect(()=>{
	// 	setLoading(false);
		 
	// 	setLoading(true);
	// },[copyOfAvailableHours])
	

	// let onlyDay = date.getDay(); // this will give 0-6 sun - sat . we going to use this to find out how the day and go to database to that specific day and get startHour and endHour
	// let dayString;
	// if (onlyDay === 0) {
	// 	// here we should get startHour and endHour from sunday
	// 	dayString = "sunday";
	// } else if (onlyDay === 1) {
	// 	dayString = "monday";
	// } else if (onlyDay === 2) {
	// 	dayString = "tuesday";
	// }
	// {loading?(<></>):(<></>)}  for loading screen

	// useEffect(()=>{},[])
	// useLayoutEffect
	return (
		<>
			{loading ? (
				<>
					<AppoHeader ownerEmail={ownerEmail} />

					<Grid container direction="row" p={5} spacing={2}>
						<Grid item md={3}>
							<Calendar
								tileDisabled={disableDays}
								onChange={handleDate}
								value={dateState}
								minDate={new Date()}
								onClickDay={(date) =>{ handleDate(date); changeStartEndHour(); }}
							/>
							{onlyDate} {dayString} {hourChose} {onlyDay}
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
									<Button variant="contained" color="primary">
										submit
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					{/* <Scheduler
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
/> */}
				</>
			) : (
				<>
					<p>loading</p>{" "}
				</>
			)}
		</>
	);
}
