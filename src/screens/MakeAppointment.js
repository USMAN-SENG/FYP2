import React from 'react';
import { Calendar, MuiPickersUtilsProvider } from '@material-ui/pickers'
//import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from '@material-ui/pickers'

// not working

const MakeAppointment = () => {
  return (
    <div>
    
         <Calendar date = {this.state.date}   />
         <DatePicker />
    
      
    </div>
  );
};

export default MakeAppointment;