import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';

export default function AppoHeader() {
	
	const mystyle = {
		maxWidth: 150,
	  };
	return (
		<>
			<AppBar position="relative">
				<Toolbar>
					<Typography style={mystyle}><img src={require('./logo2.png')}  />
           
					</Typography>
					<Stack direction="row" spacing={3} sx={{ flexGrow: 0 }}>
						<Button color="inherit"><Link to={"/AppointmentPage"}> Book </Link></Button>
						<Button color="inherit"><Link to={"/AppointmentPage"}> Customer Service </Link></Button>
						<Button color="inherit"><Link to={"/AppointmentAboutPage"}> About </Link></Button>
                        <Button color="inherit"><Link to={"/FAQpage"}> FAQ </Link></Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	);
}
