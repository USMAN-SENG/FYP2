import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import DashHeader from "./dashComponents/DashHeader";
import { useAuth } from "../firebase";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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
import { db,logout } from "../firebase";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
// Chat component
import Chat, { Message } from "react-simple-chat";
// Chat styles
import "react-simple-chat/src/components/index.css";

let customers = [[]];
let haveCustomers = false ;

export default function Msg() {
	const currentUser = useAuth(); // get the info of currentUser
	let navigate = useNavigate();
	const [messages, setMessages] = useState([]);
	const [reloadState, setReloadState] = useState(0);
	const [displayIndex, setdisplayIndex] = useState(0);
	const [cusEmail, setCusEmail] = useState();

	//const [minimizedChat, setMinimizedChat] = useState(true);
	//const [disableDownButton, setDisableDownButton] = useState(false);

	let disableUpButton = false;
	let disableDownButton = false;

	function reduceIndex() {
		console.log("reduceIndex");

		setdisplayIndex((preVale) => preVale - 1);
		console.log(displayIndex);
	}

	function increaseIndex() {
		console.log("increaseIndex");

		setdisplayIndex((preVale) => preVale + 1);
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
				// console.log(" doc.id is ", doc.id);
				copyOfCustomers.push(doc.id);
			});
			console.log("after querySnapshot.forEach((doc) => { ");
			console.log("copyOfCustomers is ");
			console.log(copyOfCustomers);
			console.log("copyOfCustomers.length is ");
			console.log(copyOfCustomers.length);
			if(copyOfCustomers.length) haveCustomers = true ;
			
			customers = [[]];
			let increaseIndex;
			copyOfCustomers.forEach((customer, i) => {
				increaseIndex = i / 4;
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
			console.log("customers[0] is ");
			console.log(customers[0]);
			setReloadState((preVale) => preVale + 1);
		} catch (e) {
			console.log(e); // error
		}
	}

	async function listenToMsg(cusEmailPass) {
		console.log("inside listenToMsg ");
		try {
			const msgColRef = collection(
				db,
				"owners",
				currentUser.email,
				"Customers",
				cusEmailPass,
				"Msg"
			);

			const q = query(msgColRef, orderBy("createdAt"), limit(30));

			// onSnapshot will work even if no one call the function
			// it will start from on onSnapshot , not from the function
			const unsubscribe = await onSnapshot(q, (querySnapshot) => {
				console.log("inside onSnapshot");
				const copyOfTextMsgs = [];
				querySnapshot.forEach((doc) => {
					console.log("inside querySnapshot.forEach");
					console.log(doc.data());
					copyOfTextMsgs.push(doc.data()); // all date in one document
					console.log("copyOfTextMsgs is");
					console.log(copyOfTextMsgs);
				});
				//textMsgs= copyOfTextMsgs ;
				console.log("outside querySnapshot.forEach");
				console.log("copyOfTextMsgs is");
				console.log(copyOfTextMsgs);

				// console.log('textMsgs is');
				// console.log(textMsgs);
				setMessages(...messages, copyOfTextMsgs);
				// console.log('messages is');
				// console.log(messages);
			});
		} catch (e) {
			console.log(e); // error
		}
	}

	async function sendMsgToDatabase(textObject) {
		const msgColRef = collection(
			db,
			"owners",
			currentUser.email,
			"Customers",
			cusEmail,
			"Msg"
		);

		try {
			await addDoc(msgColRef, textObject);
		} catch (e) {
			console.log(e); // error
		}
	}

	if (displayIndex === 0) disableUpButton = true;
	if (displayIndex === customers.length - 1) disableDownButton = true;
	// we split the page into 2 . 1st halve will containe the customers  , 2nd is the messageging app
	return (
		<div>
			{currentUser ? (
				<>
					<DashHeader ownerEmail={currentUser.email} logout={logout}/>
					<br />
					<>
						{cusEmail ? (
							<>
								<Grid container p={4}>
									<Grid item md={2}></Grid>
									<Grid item>
										<Typography align="center" variant="h4">
											You Are Chatting With<br />
											{cusEmail}
										</Typography>
									</Grid>
								</Grid>
								<Chat
									title={cusEmail}
									user={{ id: 2 }}
									messages={messages}
									// minimized={minimizedChat}
									onSend={(message) => {
										sendMsgToDatabase(message);
										// setMessages([...messages, message]);
									}}
								/>
							</>
						) : (
							<>
								<Grid
									container
									justifyContent="center"
									alignItems="center"
									alignContent="center"
									direction="row"
									spacing={2}
									p={4}
								>
									
									<Grid item>
										<Stack
											direction="row"
											justifyContent="center"
											alignItems="center"
											spacing={2}
										>
											<>
												{haveCustomers ? (
													<>
														<IconButton
															size="large"
															disabled={disableUpButton}
															onClick={reduceIndex}
														>
															<ArrowLeftIcon />
														</IconButton>
														
														{customers[displayIndex].map((cus) => (
															<Button
																variant="outlined"
																color="primary"
																size="large"
																onClick={() => {
																	//setMinimizedChat(true);
																	setCusEmail(cus);
																	listenToMsg(cus);
																}}
															>
																{cus}
															</Button>
														))}
														
														<IconButton
															size="large"
															disabled={disableDownButton}
															onClick={increaseIndex}
														>
															<ArrowRightIcon />
														</IconButton>
													</>
												) : (
													<>
														<p>No Customers ...</p>{" "}
													</>
												)}
											</>
										</Stack>
									</Grid>
								</Grid>
							</>
						)}
					</>

				</>
			) : (
				<>
					<p>loading...</p>
				</>
			)}
		</div>
	);
}
