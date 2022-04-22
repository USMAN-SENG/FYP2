import { ChooseWorkHours } from './ChooseWorkHours';

import {  useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

 

export default function WorkHours() {

  const [ formStep, setFormStep ] = useState(1);

  const hours = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM',
    '11:00 PM',
  ];

  return (

    <Grid container  direction="column"  justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>
        <Grid item >
            <Paper elevation={24}  sx={{ minHeight: "70vh" , minWidth:"75vh" }}>
              <form >
                { formStep === 1 && 
                  (<ChooseWorkHours   hours={hours}  />)
                }

                { formStep === 2 && 
                  (<section>
                    <h2> step 2</h2>

                  </section>)
                }
              </form>
            </Paper>
            

        </Grid>
        
    </Grid>

  )  
}
  