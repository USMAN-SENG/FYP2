import { ChatLogIn } from "./components/ChatLogIn";
import React from "react";
import AppoHeader from "./components/AppoHeader";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import {
	db,signUpForCustomerService
} from "../firebase";

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

export default function CustomerServicePage() {

	let {ownerEmail} = useParams();  

	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false); // disable button
	const [customerIsLogin, setCustomerIsLogin] = useState(false);
  const [messages, setMessages] = useState([]);

	const singUpEmailRef = useRef(); // get the email input
	const singUpPasswordRef = useRef(); // get the password input

	const loginEmailRef = useRef(); // get the login email input
	const loginPasswordRef = useRef(); // get the login password input

	
	async function handleSignup() {

		const docRef = doc(db, "owners", ownerEmail, "Customers", singUpEmailRef.current.value);
		const docSnap = await getDoc(docRef);
		try {
			 if (docSnap.exists()) {

				alert("Account Already Registered");

			} else {
				await signUpForCustomerService(ownerEmail, singUpEmailRef.current.value, singUpPasswordRef.current.value);
				setCustomerIsLogin(true);
			}
		} catch (e) {
			console.log(e); // error
		}
		//console.log(`${singUpEmailRef.current.value} + ${singUpPasswordRef.current.value}`); //manage to get the data from the text field
		
	}

	async function handleLogin() {
		const docRef = doc(db, "owners", ownerEmail, "Customers", loginEmailRef.current.value);
		const docSnap = await getDoc(docRef);
		try {
			 if (docSnap.exists()) {

				if (loginEmailRef.current.value === docSnap.data().email && loginPasswordRef.current.value === docSnap.data().password )
				{setCustomerIsLogin(true);}
				else {alert("Password Is Incorrect");}

			} else {

				alert("Account Does Not Exist");
			}
		} catch (e) {
			console.log(e); // error
		}
	}

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

  //console.log(messages );

	return (
		<div>
			{/* pass website name */}
			<AppoHeader ownerEmail={ownerEmail}/> 
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
						onSend={(message) => setMessages([...messages, message])}
						 
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
									emailRef={singUpEmailRef}
									passwordRef={singUpPasswordRef}
									handleSubmit={handleSignup}
									loading={loading}
									buttonLabel="Sign up"
								/>
							</TabPanel>
							<TabPanel value={value} index={1}>
								<ChatLogIn
									emailRef={loginEmailRef}
									passwordRef={loginPasswordRef}
									handleSubmit={handleLogin}
									loading={loading}
									buttonLabel="Login"
								/>
							</TabPanel>
						</Box>
					</Grid>
				</Grid>
			)}
		</div>
	);
}
