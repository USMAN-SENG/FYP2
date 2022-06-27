import React from 'react'
import { useState } from "react";
import Grid from "@mui/material/Grid";
import DashHeader from "./dashComponents/DashHeader";
import { useAuth } from "../firebase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
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
import { db } from "../firebase";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom"; 
 // Chat component
import Chat, { Message } from "react-simple-chat";
// Chat styles
import "react-simple-chat/src/components/index.css";

export default function Msg() {

  const currentUser = useAuth(); // get the info of currentUser
	let navigate = useNavigate();
  const [messages, setMessages] = useState([]);
 
  // we split the page into 2 . 1st halve will containe the customers  , 2nd is the messageging app  
  return (
    <div>
      <Grid
				container
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				direction="row"
				p={4}
			>
				<Grid item>
				
				</Grid>
				<Grid item></Grid>
			</Grid>
      <Chat
						title="Jane Doe"
						user={{ id: 1 }}
						messages={messages}
						onSend={(message) => setMessages([...messages, message])}
						 
					/>
    </div>
  )
}
