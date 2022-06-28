import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import DashHeader from "./dashComponents/DashHeader";
import { useAuth } from "../firebase";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {
	doc,
	getDoc,
	getDocs,
	query,
	orderBy,
	limit,
	collection,
	addDoc,
	onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
// Chat component
import Chat, { Message } from "react-simple-chat";
// Chat styles
import "react-simple-chat/src/components/index.css";

let customers = [[]];

export default function Msg() {
	const currentUser = useAuth(); // get the info of currentUser
	let navigate = useNavigate();
	const [messages, setMessages] = useState([]);
	const [reloadState, setReloadState] = useState(0);
	const [displayIndex, setdisplayIndex] = useState(0);

	//const [disableUpButton, setDisableUpButton] = useState(false);
	//const [disableDownButton, setDisableDownButton] = useState(false);

	let disableUpButton = false; 
	let disableDownButton = false;

	function reduceIndex(){
		console.log("reduceIndex");

		setdisplayIndex((preVale) => preVale - 1)
		console.log(displayIndex);
	}

	function increaseIndex(){
		console.log("increaseIndex");

		setdisplayIndex((preVale) => preVale + 1)
		console.log(displayIndex);
	}

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

				getCustomersEmail();
			} else {
				navigate("/signup");
			}
		};

		displayData();
	}, [currentUser]);

	async function getCustomersEmail() {
		let copyOfCustomers = [];
		let index = 0;
		console.log("inside getCustomersEmail ");
		try {
			const customersColRef = collection(
				db,
				"owners",
				currentUser.email,
				"Customers"
			);

			const querySnapshot = await getDocs(customersColRef);

			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				//console.log(doc.id, " => ", doc.data()); // doc.data() is everything in doc
				console.log(" doc.id is ", doc.id);
				copyOfCustomers.push(doc.id);
			});
			console.log("after querySnapshot.forEach((doc) => { ");
			console.log("copyOfCustomers is ");
			console.log(copyOfCustomers);
			let increaseIndex;
			copyOfCustomers.forEach((customer, i) => {
				increaseIndex = i / 5;
				console.log("increaseIndex is", increaseIndex);
				customers[index].push(customer);
				if (Number.isInteger(increaseIndex) && increaseIndex !== 0) {
					console.log("increase the Index ... ");
					customers.push([]);
					index++;
				}
			});
			console.log("customers is ");
			console.log(customers);
			setReloadState((preVale) => preVale + 1);
		} catch (e) {
			console.log(e); // error
		}
	}

	if(displayIndex=== 0 ) disableUpButton = true;
	if(displayIndex=== customers.length-1 ) disableDownButton = true; 
	// we split the page into 2 . 1st halve will containe the customers  , 2nd is the messageging app
	return (
		<div>
			{currentUser ? (
				<>
					<DashHeader />
					<br />

					<Grid
						container
						// justifyContent="center"
						alignItems="center"
						alignContent="center"
						direction="row"
						spacing={2}
						p={4}
					>
						<Grid item md={1}></Grid>
						<Grid item>
							<Stack
								direction="column"
								justifyContent="center"
								alignItems="center"
								spacing={2}
							>
								<>
									{customers ? (
										<>
											<IconButton size="large" disabled={disableUpButton} onClick={reduceIndex}>
												<ArrowDropUpIcon />
											</IconButton>
											{/* <Button
												variant="outlined"
												color="primary"
												size="large"
												// onClick={() => {
												// 	sendAppointmentToDatabase();
												// }}
											>
												^
											</Button> */}
											{customers[displayIndex].map((cus) => (
												<Button variant="outlined" color="primary" size="large">
													{cus}
												</Button>
											))}
											{/* <Button variant="outlined" color="primary" size="large">
												v
											</Button> */}
											<IconButton size="large" disabled={disableDownButton} onClick={increaseIndex}>
												<ArrowDropDownIcon />
											</IconButton>
										</>
									) : (
										<></>
									)}
								</>

								{/* 								
								<Button
									variant="outlined"
									color="primary"
									size="large"
								>
									customer12345678@gmail.com
								</Button>
								<Button
									variant="outlined"
									color="primary"
									size="large"
								>
									customer12345678@gmail.com
								</Button>
								<Button
									variant="outlined"
									color="primary"
									size="large"
								>
									customer12345678@gmail.com
								</Button>
								<Button
									variant="outlined"
									color="primary"
									size="large"
								>
									customer12345678@gmail.com
								</Button>
								<Button
									variant="outlined"
									color="primary"
									size="large"
								>
									customer12345678@gmail.com
								</Button>
								<Button
									variant="outlined"
									color="primary"
									size="large"
								>
									customer12345678@gmail.com
								</Button> */}
							</Stack>
						</Grid>
					</Grid>
					<Chat
						title="Jane Doe"
						user={{ id: 1 }}
						messages={messages}
						onSend={(message) => setMessages([...messages, message])}
					/>
				</>
			) : (
				<>
					<p>loading...</p>
				</>
			)}
		</div>
	);
}
