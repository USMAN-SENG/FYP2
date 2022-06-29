import React from "react";
import DashHeader from "./dashComponents/DashHeader";
// import { Scheduler } from "@arshadrao/react-scheduler";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useAuth } from "../firebase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Scheduler } from "@arshadrao/react-scheduler";
import {
	doc,
	getDoc,
	query,
	orderBy,
	limit,
	collection,
	addDoc,
	onSnapshot,
} from "firebase/firestore";
import { db ,logout } from "../firebase";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

// ctrl + alt + r
let events = [];
export let stopListenToLiveUpdate;

export default function Calendar() {
	const currentUser = useAuth(); // get the info of currentUser
	let navigate = useNavigate();

	const [reloadState, setReloadState] = useState(0);

	useLayoutEffect(() => {
		const displayData = async () => {
			const docRef = doc(db, "owners", currentUser.email);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				if (docSnap.data().officeAddress) {
					// do nothing
				} else {
					// we should navigate to the sign up
					navigate("/signup");
				}

				listenToAppointments();
			} else {
				navigate("/signup");
			}
		};

		displayData();
	}, [currentUser]);

	async function listenToAppointments() {
		console.log("inside listenToAppointments ");
		try {
			const msgColRef = collection(
				db,
				"owners",
				currentUser.email,
				"Appointments"
			);

			//const q = query(msgColRef, orderBy("createdAt"), limit(30));

			// onSnapshot will work even if no one call the function
			// it will start from on onSnapshot , not from the function
			const unsubscribe = await onSnapshot(msgColRef, (querySnapshot) => {
				console.log("inside onSnapshot");
				const copyOfEvents = [];
				querySnapshot.forEach((doc) => {
					console.log("inside querySnapshot.forEach");
					console.log(doc.data().BookedAppointments);
					doc.data().BookedAppointments.forEach((bookedAppoint) => {
						copyOfEvents.push(bookedAppoint);
					});

					console.log("copyOfEvents is");
					console.log(copyOfEvents);
				});
				//textMsgs= copyOfTextMsgs ;
				console.log("outside querySnapshot.forEach");
				console.log("copyOfEvents is");
				console.log(copyOfEvents);

				copyOfEvents.forEach((event, index) => {
					events.push({
						event_id: index,
						title: event.title,
						start: new Date(event.appointmentStart),
						end: new Date(event.appointmentEnd),
					});
					// setEventState([...eventState, { // it didn't work because set will reRender
					// 		event_id: index,
					// 		title: event.title,
					// 		start: new Date(event.appointmentStart),
					// 		end: new Date(event.appointmentEnd)
					// }]);
				});
				setReloadState(preVale => preVale+1);
				//events = copyOfEvents;
				console.log("events  is");
				console.log(events);
				console.log("ReloadState  is");
				console.log(reloadState);
				//createAppointmentComponent();
			});
			// stopListenToLiveUpdate = unsubscribe();  // how to make all page use it ??
		} catch (e) {
			console.log(e); // error
		}
	}

	

	return (
		<div>
			{currentUser ? (
				<>
					<DashHeader ownerEmail={currentUser.email} logout={logout}/>
					{events ? (
						<>
							<Grid container p={6} direction="row">
								<Grid item md={12}>
									<Scheduler
										month={{
											weekDays: [0, 1, 2, 3, 4, 5, 6],
											weekStartOn: 6,
											startHour: 8,
											endHour: 19,
										}}
										week={{
											weekDays: [0, 1, 2, 3, 4, 5, 6],
											weekStartOn: 6,
											startHour: 1,
											endHour: 24,
											step: 60,
										}}
										day={{
											startHour: 1,
											endHour: 24,
											step: 60,
										}}
										view="month"
										events={events}
									/>
								</Grid>
							</Grid>
						</>
					) : (
						<>
							<p>loading...</p>
						</>
					)}
				</>
			) : (
				<>
					<p>loading...</p>
				</>
			)}
		</div>
	);
}
