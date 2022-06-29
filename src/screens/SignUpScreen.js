import { Paper, Button } from '@mui/material'
import React, { Component } from 'react'
import Header from '../components/Header'
import TextField from '@mui/material/TextField';
import {AccountCircle,Email,Lock} from '@mui/icons-material';
import EmailConfirmBanner from '../components/EmailConfirmBanner';
import { SmallFooter } from '../components/Footer';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function  SignUpScreen()  {

  let navigate = useNavigate();

  const emailRef = useRef(); // get the email input
  const passwordRef = useRef(); // get the password input

  const [ loading, setLoading ] = useState(false); // disable button
  const currentUser = useAuth(); // get the info of currentUser

  if(currentUser){
    console.log(currentUser); 
  console.log("user email "+currentUser.email); 
  }else{
    console.log("sign up user log out " ); 
  }
  

  async function handleSignup() {
    //console.log(`${emailRef.current.value} + ${passwordRef.current.value}`); //manage to get the data from the text field

   setLoading(true); // disable button
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate(`/CustomizeAppoinment`);
    } catch {
      alert("Error!"); // error when you use the same email to sign up again
    }
    setLoading(false); // enable button
  }



    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='flex flex-1 justify-center items-center h-[40rem] flex-col'>
          <Paper elevation={3} className = "w-1/2">
            <div className='flex flex-row h-96'>
              <div className='h-full w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-start px-10 py-10'>
                <span className='font-bold text-4xl text-gray-100'>Signup</span>
                <span className='text-sm '>For new Account</span>
                <div className='mt-20'>
                <Button sx={{ m: 3 }} variant="contained">
                  <Link to={"/login"}> Login </Link>
                </Button>
                {/* <Button  variant="contained">
                  <Link to={"/CustomizeAppoinment"}> WorkHours </Link>
                </Button> */}
                {/* <Button  variant="contained" onClick={() => logout()}>
                  log out
                </Button> */}
                <br/>
                <span className='text-xs text-white'>If Already have Account</span>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center w-3/5 h-full'>
                
              
                <div className='flex flex-row'>
                  <Email sx={{ color: 'action.active', mr: 1, my: 2 }} />
                  <TextField inputRef={emailRef} label="Email" variant="standard" sx={{width:"17rem"}} />
                </div>
                <div className='flex flex-row'>
                  <Lock sx={{ color: 'action.active', mr: 1, my: 2 }} />
                  <TextField inputRef={passwordRef} label="Password" variant="standard" sx={{width:"17rem"}} />
                </div>
                <div> 
                  <Button onClick={handleSignup} disabled={ loading } variant='outlined' sx={{":hover":{backgroundColor:"#0073e6",color:"#ffffff"}}}>Signup</Button>
                </div>
              </div>
            </div>
          </Paper>
          {/* note: add email confirmatiom later */}
          {/* <div className='w-2/3 m-5'>
            <EmailConfirmBanner />
          </div> */}
        </div>
        <SmallFooter />
      </div>
    )
  
}
