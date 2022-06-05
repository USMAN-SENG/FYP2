import { ExpandMore } from '@mui/icons-material'
import { Paper, Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material'
import React from 'react'

export default function FaqQuestion(props) {
  return (
    <>
    <Paper elevation={0} sx={{width:"70%", marginY:"0.5rem",padding:"0px"}} >
        <Accordion sx={{width:"100%",backgroundColor:"#DFDFDF",padding:"0px"}}>
            <AccordionSummary
            expandIcon={<ExpandMore />}
            sx = {{padding:"0px",margin:"0px"}}
            >
              <div className='flex items-center p-0'>
                <div className='w-20 h-20 m-0 flex justify-center items-center bg-[#7B7B7B]'>
                  <span className='text-4xl font-bold'>{props.index}</span>
                </div>
                <Typography sx={{fontSize:"1.4rem",fontWeight:"bold"}}>{props.ques}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                {props.ans}
                </Typography>
            </AccordionDetails>
      </Accordion>
    </Paper>
 
    </>
  )
}
