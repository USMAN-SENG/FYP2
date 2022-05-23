import { ChooseWorkHours } from './ChooseWorkHours';

import {  useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

 

export default function CustomizeAppoinment() {

  const [ formStep, setFormStep ] = useState(1);

  
   //  0 = sunday , 1 = monday ...
  return (

    <Grid container  direction="column"  justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>
        <Grid item >
            <Paper elevation={24}  sx={{ minHeight: "70vh" , minWidth:"100vh" }}>
              <form >
                { formStep === 1 && 
                  (<ChooseWorkHours  />)
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
  