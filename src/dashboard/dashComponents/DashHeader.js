import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import MessageIcon from '@mui/icons-material/Message';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate ,Link  } from "react-router-dom";



export default function DashHeader({ ownerEmail, logout }) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	let navigate = useNavigate();

	function redirectToHomePage(){
		navigate(`/`);
	}

	const menuItems = [
		{
			text: "Calendar",
			icon: <CalendarMonthIcon color="secondary" />,
			path: "/Dashboard/Calendar",
		},
		{
			text: "Chat",
			icon: <MessageIcon color="secondary" />,
			path: "/Dashboard/Msg",
		},
		{
			text: "Edit",
			icon: <EditIcon color="secondary" />,
			path: "/Dashboard/EditFAQ",
		},
	];

	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={() => setIsDrawerOpen(true)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Menu
						</Typography>

						<Link to={`/AppointmentPage/${ownerEmail}`}>
						<Button sx={{  p: 1,m:1 , bgcolor:"#1A5276"}}   variant="contained" size="large" >Visit Website</Button>
						</Link>
						

						<Button sx={{ bgcolor:"#CB4335"}} variant="contained" size="large" onClick={() => {
						logout();
						setTimeout(redirectToHomePage, 5000);
						
					}}>LogOut</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			>
				<Box p={2} width="240px" textAlign="center" role="presentation">
					<List>
						{menuItems.map((item) => (
							<ListItem
								button
								key={item.text}
								onClick={() => navigate(item.path)}
							>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</div>
	);
}
