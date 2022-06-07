import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function AppoHeader() {
	let websiteName = "website Name";
	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} 
           >
						{websiteName}
					</Typography>
					<Stack direction="row" spacing={3} sx={{ flexGrow: 0 }}>
						<Button color="inherit">Book</Button>
						<Button color="inherit">Customer Service</Button>
						<Button color="inherit">About</Button>
            <Button color="inherit">FAQ</Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	);
}
