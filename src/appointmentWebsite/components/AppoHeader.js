import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';

export default function AppoHeader({ownerEmail}) {
	let websiteName = "website Name";
	return (
		<>
			<AppBar position="relative">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} 
           >
						{websiteName}
					</Typography>
					<Stack direction="row" spacing={3} sx={{ flexGrow: 0 }}>
						<Button color="inherit"><Link to={`/AppointmentPage/${ownerEmail}`}> Book </Link></Button>
						<Button color="inherit"><Link to={`/CustomerServicePage/${ownerEmail}`}> Customer Service </Link></Button>
						<Button color="inherit"><Link to={`/AppointmentAboutPage/${ownerEmail}`}> About </Link></Button>
            <Button color="inherit"><Link to={`/FAQpage/${ownerEmail}`}> FAQ </Link></Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	);
}
