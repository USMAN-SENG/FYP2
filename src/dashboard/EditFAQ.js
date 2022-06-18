import React from "react";
import DashHeader from "./dashComponents/DashHeader";
import { useState } from "react";
import Grid from "@mui/material/Grid";

// Chat component
import Chat, { Message } from "react-simple-chat";
// Chat styles
import "react-simple-chat/src/components/index.css";

export default function EditFAQ() {
	const [messages, setMessages] = useState([]);

	console.log(messages);

	return (
		<div>
			<DashHeader />
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				direction="row"
				p={4}
			>
				<Grid item>
					<Chat
						title="Jane Doe"
						user={{ id: 1 }}
						messages={messages}
						onSend={(message) => setMessages([...messages, message])}
						 
					/>
				</Grid>
				<Grid item></Grid>
			</Grid>
		</div>
	);
}
