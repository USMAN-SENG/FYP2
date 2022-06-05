import React from 'react'
// import Material Components from Material Ui 
import { Container, Grid, Box, Typography, TextField, Button,Divider,List ,ListItem,Fab } from '@mui/material';
// import Icon from Material ui 
import SendIcon from '@mui/icons-material/Send';
// import Chat Style from Style Component 
import { ChatStyle } from './Style'


export default function Chat() {
    const messagedata = [
        { message: "Make Appointment" },
       
    ]
    return (
        <>
            <ChatStyle >
                <Box pt={1.5} >
                    <Container>
                        {/* Chat Header Section started */}
                        <Grid container spacing={5}  >
                            <Grid item xs={10} lg={10} >
                                <Typography variant="h2" gutterBottom component="div" className='eden-westwood' >
                                    Chat With Us
                                </Typography>
                                <Typography variant="h2" gutterBottom component="div" fontSize="12px" >
                                    Office name
                                </Typography>
                            </Grid>
                        </Grid>
                          {/* Chat Header Section ended */}
                        <Box mt={1} >
                            <Divider />
                        </Box>
                        <div className='chat-setting' >
                            <Box my={1} >
                                <Grid container >
                                    <Grid item xs={10} lg={10} >
                                        <List className="userlist" >
                                            <ListItem>
                                                <Typography variant="h2" gutterBottom component="div" fontSize="12px"  >
                                                    Visa unit
                                                </Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    
                                </Grid>
                            </Box>
                            <Box my={1} >
                                <Grid container >
                                    
                                    <Grid item xs={10} lg={10} >
                                        <List className="chatlist" >
                                            {messagedata.map((data) => {
                                                return <>
                                                    <ListItem>
                                                        <Typography variant="h2" gutterBottom component="div" fontSize="12px"  >
                                                            {data.message}
                                                        </Typography>
                                                    </ListItem>
                                                </>
                                            })}

                                        </List>

                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </Container>
                    <div className='chattype' >

                        {/*  type chat started  */}

                        <Grid container >
                            <Grid item xs={10} lg={10} >
                                <TextField
                                    id="outlined-multiline-flexible"
                                    placeholder="Message"
                                    multiline
                                    maxRows={1}
                                    fullWidth
                                    className='Message'
                                    variant="standard"
                                    sx={{ borderBottom: "unset" }}
                                />
                            </Grid>
                            <Grid item xs={2} lg={2} >
                                <div className='senderbtn' >
                                    <Button variant='contained' color="primary"   > <SendIcon fontSize='small' />  </Button>
                                </div>
                            </Grid>
                        </Grid>
                        {/*  type chat ended  */}
                    </div>


                </Box>
            </ChatStyle>
        </>
    )
}