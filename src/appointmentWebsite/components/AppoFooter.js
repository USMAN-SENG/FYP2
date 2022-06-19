import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FacebookTwoTone,Twitter,Instagram} from '@mui/icons-material'
import Stack from '@mui/material/Stack';

export default function AppoFooter() {
  
	return (
		<>
     <Box backgroundColor= "#c6c6c6" borderTop= "1px solid #E7E7E7" textAlign= "center" padding= "20px"
      position = "Fixed" left= "0" bottom= "0" height= "48px" width= "100%" 
       >
        
        <Typography  > BookingZen@2022 <FacebookTwoTone fontSize="small" color="primary"  />
                                       <Twitter fontSize="small" color="primary"  />
                                       <Instagram fontSize="small" color="primary"  />
        </Typography> 
        
        
     </Box>
   
    </>
    
	);
}
