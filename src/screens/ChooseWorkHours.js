import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NativeSelect from '@mui/material/NativeSelect';
import Input from '@mui/material/Input';



export function ChooseWorkHours({hours}) {
  return (
    <section>
      <Typography variant="h6" align='center'> step 1 </Typography>
      
      <Typography m={2} variant="h5" align='center'> 
        Add office working hours 
      </Typography>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <FormControlLabel control={<Checkbox />} label="Monday" />
        </Grid>
        <Grid item xs={3}>
          <Input 
          type='number'
          inputProps = { {max: 100, min: 10 }   }
          ></Input>AM
        </Grid>
        <Grid item xs={1}> <p>To</p> </Grid>
        {/* find a way to start from the next hour  */}
        <Grid item xs={3}>
        <NativeSelect>
          {hours.map(hours => <option value={hours}>
              {hours}
            </option>)}
        </NativeSelect>
        </Grid>
      </Grid>

    </section>
  )
}
  