import { ChatLogIn } from "./components/ChatLogIn";
import React from "react";
import AppoHeader from "./components/AppoHeader";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {  useState, useLayoutEffect } from "react";

import { useParams,useNavigate } from "react-router-dom";
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
import { db, signUpForCustomerService } from "../firebase";

// Chat component
import Chat, { Message } from "react-simple-chat";
// Chat styles
import "react-simple-chat/src/components/index.css";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

let websiteName;

export default function CustomerServicePage() {
	let { ownerEmail } = useParams();
	let navigate = useNavigate();

	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false); 
	const [customerIsLogin, setCustomerIsLogin] = useState(false);
	const [messages, setMessages] = useState([]);
	const [cusEmail, setCusEmail] = useState("");
	const [cusPass, setCusPass] = useState("");

 
	useLayoutEffect(() => {
		setLoading(false);
		const displayData = async () => {
			const docRef = doc(db, "owners", ownerEmail);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				
				if (docSnap.data().officeAddress) {
					 // do nothing
				} else {
					// we should navigate to the home page
					navigate('/');
				}

				websiteName = docSnap.data().officeName;
				//console.log("officeAddress :", docSnap.data().officeAddress);

				//console.log("test something that don't exist :", docSnap.data().office); //undefined , we can use this sign up or log in to direct them
				//websiteName = docSnap.data().officeName;

				//sundayHours = docSnap.data().sundayHours;

			} else {				
				navigate('/');
		
			}
			setLoading(true);
		};

		displayData();
	}, [ownerEmail]);


	async function listenToMsg() {
		console.log("inside listenToMsg ");
		try {
			const msgColRef = collection(
				db,
				"owners",
				ownerEmail,
				"Customers",
				cusEmail,
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
					copyOfTextMsgs.push(doc.data());
					console.log('copyOfTextMsgs is');
					console.log(copyOfTextMsgs);
				});
				//textMsgs= copyOfTextMsgs ;
				console.log("outside querySnapshot.forEach");
				console.log('copyOfTextMsgs is');
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


	function handleEmailChange(value) {
		setCusEmail(value);
	}
	function handlePasswordChange(value) {
		setCusPass(value);
	}

	async function handleSignup() {
		const docRef = doc(db, "owners", ownerEmail, "Customers", cusEmail);
		const docSnap = await getDoc(docRef);
		try {
			if (docSnap.exists()) {
				alert("Account Already Registered");
			} else {
				await signUpForCustomerService(ownerEmail, cusEmail, cusPass);
				setCustomerIsLogin(true);
				listenToMsg();
			}
		} catch (e) {
			console.log(e); // error
		}
		//console.log(`${singUpEmailRef.current.value} + ${singUpPasswordRef.current.value}`); //manage to get the data from the text field
	}

	async function handleLogin() {
		const docRef = doc(db, "owners", ownerEmail, "Customers", cusEmail);
		const docSnap = await getDoc(docRef);
		try {
			if (docSnap.exists()) {
				if (
					cusEmail === docSnap.data().email &&
					cusPass === docSnap.data().password
				) {
					setCustomerIsLogin(true);
					listenToMsg();
				} else {
					alert("Password Is Incorrect");
				}
			} else {
				alert("Account Does Not Exist");
			}
		} catch (e) {
			console.log(e); // error
		}
	}

	async function sendMsgToDatabase(textObject) {

		const msgColRef = collection(
			db,
			"owners",
			ownerEmail,
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

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	let disableButton = false;
	if (cusEmail === "" || cusPass === "" )
		disableButton = true;

	return (
		<div>
			{loading?(<>
				<AppoHeader ownerEmail={ownerEmail} websiteName={websiteName} />
			{customerIsLogin ? (
				<>
					<Grid container p={4}>
						<Grid item md={2}></Grid>
						<Grid item>
							<Typography align="center" variant="h4">
								Send Your Questions <br />
								We Will Reply Once We Are Available
							</Typography>
						</Grid>
					</Grid>
					<Chat
						title="Customer Service"
						user={{ id: 1 }}
						messages={messages}
						onSend={(message) => {

							sendMsgToDatabase(message);
							// setMessages([...messages, message]);
						}}
					/>
				</>
			) : (
				<Grid
					container
					spacing={1}
					direction="column"
					justifyContent="center"
					alignItems="center"
					alignContent="center"
					p={4}
				>
					<Grid item md={10}>
						<Typography align="center" variant="h4">
							Chat Sign up / Login
						</Typography>
						<Box sx={{ width: "100%" }} m={2}>
							<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="basic tabs example"
								>
									<Tab label="Sign up" {...a11yProps(0)} />
									<Tab label="Login" {...a11yProps(1)} />
								</Tabs>
							</Box>
							<TabPanel value={value} index={0}>
								<ChatLogIn
									emailValue={cusEmail}
									passwordValue={cusPass}
									handleEmailChange={handleEmailChange}
									handlePasswordChange={handlePasswordChange}
									handleSubmit={handleSignup}
									loading={disableButton}
									buttonLabel="Sign up"
								/>
							</TabPanel>
							<TabPanel value={value} index={1}>
								<ChatLogIn
									emailValue={cusEmail}
									passwordValue={cusPass}
									handleEmailChange={handleEmailChange}
									handlePasswordChange={handlePasswordChange}
									handleSubmit={handleLogin}
									loading={disableButton}
									buttonLabel="Login"
								/>
							</TabPanel>
						</Box>
					</Grid>
				</Grid>
			)}
			</>):(<><p>loading...</p></>)} 
			
		</div>
	);
}
