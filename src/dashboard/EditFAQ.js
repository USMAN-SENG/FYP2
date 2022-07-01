import React from "react";
import DashHeader from "./dashComponents/DashHeader";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useLayoutEffect } from "react";
import DeleteFAQ from "./DeleteFAQ";
import AddNewFAQ from "./AddNewFAQ";
import UpdateWorkHours from "./UpdateWorkHours";
import UpdateInfo from "./UpdateInfo";

import { useNavigate } from "react-router-dom";
import {
	doc,
	getDoc,
} from "firebase/firestore";
import { db, useAuth,logout } from "../firebase";

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

export default function EditFAQ() {
	const currentUser = useAuth(); // get the info of currentUser
	let navigate = useNavigate();

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useLayoutEffect(() => {
		const displayData = async () => {
			const docRef = doc(db, "owners", currentUser.email);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				if (docSnap.data().officeAddress) {
					// do nothing
				} else {
					// we should navigate to the CustomizeAppoinment
					navigate("/CustomizeAppoinment");
				}

			} else {
				navigate("/signup");
			}
		};

		displayData();
	}, [currentUser]);

	return (
		<div>
			{currentUser ? (
				<>
					<DashHeader ownerEmail={currentUser.email} logout={logout}/>
					<Grid
						container
						justifyContent="center"
						alignItems="center"
						alignContent="center"
						direction="row"
						p={1}
					>
						<Grid item>
							<Box sx={{ width: "100%" }} m={2}>
								<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
									<Tabs
										value={value}
										onChange={handleChange}
										aria-label="basic tabs example"
									>
										<Tab label="Delete FAQ" {...a11yProps(0)} />
										<Tab label="Add FAQ" {...a11yProps(1)} />
										<Tab label="change work hours" {...a11yProps(2)} />
										<Tab label="change info" {...a11yProps(3)} />
									</Tabs>
								</Box>
								<TabPanel value={value} index={0}>
									<DeleteFAQ ownerEmail={currentUser.email}/>
								</TabPanel>
								<TabPanel value={value} index={1}>
									<AddNewFAQ ownerEmail={currentUser.email}/>
								</TabPanel>
								<TabPanel value={value} index={2}>
									<UpdateWorkHours ownerEmail={currentUser.email}/>
								</TabPanel>
								<TabPanel value={value} index={3}>
									<UpdateInfo ownerEmail={currentUser.email}/>
								</TabPanel>
							</Box>
						</Grid>
						<Grid item></Grid>
					</Grid>
				</>
			) : (
				<>
					<p>loading...</p>
				</>
			)}
		</div>
	);
}
