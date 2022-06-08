import React from 'react'
import AppoHeader from './components/AppoHeader'
import { useRef, useState } from "react";
import Calendar from 'react-calendar';
import Grid from "@mui/material/Grid";
import 'react-calendar/dist/Calendar.css';

export default function AppointmentPage() {

  const [todayDate, setTodayDate] = useState(new Date());
  const [name, setname] = useState('ahmad');
  const [date, setDate] = useState(new Date());

  function handleDate(date){
    setDate(date);
  }

  // const onChange = date => {
  //   setDate(date);
  // };

let notIncludeDay= {
  dayArray: [0, 6,5]
}
const disabledDates = [];
if(notIncludeDay.dayArray.length){
  for (let i = 0; i < 7; i++){
    if(i> notIncludeDay.dayArray.length)
    disabledDates.push(disabledDates[0]);
    else 
    disabledDates.push(notIncludeDay.dayArray[i]);
  }
}


// sun= 0 , mon = 1 , ...
function disableDays({activeStartDate, date, view }) 
{ // we take date of each not include day and repeate it
  // we do a for loop to all not include day and then repeat the last value
  return date.getDay() === disabledDates[0] || date.getDay() === disabledDates[1] || date.getDay() === disabledDates[2]  || date.getDay() === disabledDates[3]|| date.getDay() === disabledDates[4]|| date.getDay() === disabledDates[5]|| date.getDay() === disabledDates[6] ; // sun , saturday
}

  return (
    <>
      <AppoHeader />
     
      {/* <div>helloe </div>
      <div>{name} </div>
      <div>{todayDate.toString()} </div> */}
      <Grid container justifyContent="center"
			alignItems="center" m={5}>
        <Grid item  >
        
      <Calendar  tileDisabled={disableDays} showDoubleView={true} onChange={handleDate} value={date} />
      {console.log(date)}
      {date.toString()}
    
        </Grid>
      </Grid>
      
    
    </>
  )
}
