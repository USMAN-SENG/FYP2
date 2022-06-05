
      import React, { Component } from 'react'
      // import footer
      import { SmallFooter } from '../../components/Footer'
      // import header
      import Header from '../../components/Header';
      // import Datepicker
      import Datepick from './Datepick'
      // import Material Ui component
      import { Container, Box, Grid } from '@mui/material';
      import ChatHome from '../../components/Chat/Index';

      
      
      export default function MakeAppointment() {
        return (
          <div>
            <Header />
            <Box pb={36} style={{height:'100vh'}} >
              <Container>
                <Grid container spacing={4} >
                  <Grid item lg={6} md={6} sm={8} xs={12} >
                    <Box my={3} >
                      <Datepick />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={4} xs={12} >
                    <Box fontSize="16px" color="black" mt={2}  > Tuesday, 20 May </Box>
                    <Box fontSize="16px" color="#808080" >  Malaysia Time (MYT) </Box>
                    <Box fontSize="16px" color="black" mt={2}  > No Available time slots </Box>
                    <Box fontSize="16px" color="#808080" > Check the next available date </Box>
                  </Grid>
                </Grid>
      
              </Container>
            </Box>
            
            <ChatHome/>
            <SmallFooter />
          </div>
        )
      }  