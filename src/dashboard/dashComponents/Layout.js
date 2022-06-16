import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240 ;

const useStyles = {
	page: {
    background: '#f9f9f9',
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}

const useSX={}

// ctrl + alt + r
export default function Layout() {
	let navigate = useNavigate();
	return (
		<div style={useStyles.root}>
			 {/* app bar */}
			 <div>app bar</div>
			 {/* <Button color="inherit" onClick={() => navigate("Calendar")}>			
				Calendar
			</Button>

			<Link to="Calendar">link Calendar</Link>
			<Link to="DashSettings">link DashSettings</Link> */}
      
      {/* side drawer */}
      <div>side drawer</div>
			<Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
      </Drawer>

      {/* main content */}
      <div style={useStyles.page}>
			<Outlet />
      </div>

			
			{/* <Link to="/Calendar"> calender</Link> */}

			{/* <Navigate  to='/Calendar'  /> */}
			<main className="container">
				
			</main>
			{/* <div>{children}</div> */}
		</div>
	);
}
