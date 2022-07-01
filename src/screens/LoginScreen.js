import { Paper, Button } from '@mui/material'
import React, { Component } from 'react'
import Header from '../components/Header'
import TextField from '@mui/material/TextField';
import {Email,Lock} from '@mui/icons-material';
import { SmallFooter } from '../components/Footer';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { login, logout, useAuth} from "../firebase";
import { useNavigate } from "react-router-dom";


export default function LoginScreen () {
  
  let navigate = useNavigate();

  const loginEmailRef = useRef(); // get the email input
  const loginPasswordRef = useRef(); // get the password input

  const [ loading, setLoading ] = useState(false); // disable button

  const currentUser = useAuth(); // get the info of currentUser

  async function handleLogin() {
    setLoading(true);
    try {
      await login(loginEmailRef.current.value, loginPasswordRef.current.value);
      console.log('succeful log in');
      navigate(`/CustomizeAppoinment`);
      
    } catch(e) {
      alert("Error!" + e);
    }
    setLoading(false);
  }

  if(currentUser){
    console.log(currentUser); 
  console.log("user email "+currentUser.email); 
  }else{
    console.log("login page user log out " ); 
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
                <span className='font-bold text-4xl text-gray-100'>LogIn</span>
                <span className='text-sm '>If Already have account</span>
                <div className='mt-20'>
                <Button variant="contained"><Link to = {"/signup"}>SignUp</Link></Button>
                {/* <Button  variant="contained" onClick={() => logout()}>
                  log out
                </Button> */}
                <br/>
                <span className='text-xs text-white'>For new Account</span>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center w-3/5 h-full'>
                <div className='flex flex-row'>
                  <Email sx={{ color: 'action.active', mr: 1, my: 2 }} />
                  <TextField inputRef={loginEmailRef} label="Email" variant="standard" sx={{width:"17rem"}} />
                </div>
                <div className='flex flex-row'>
                  <Lock sx={{ color: 'action.active', mr: 1, my: 2 }} />
                  <TextField inputRef={loginPasswordRef} label="Password" variant="standard" sx={{width:"17rem"}} />
                </div>
                <div>
                  <Button disabled={ loading  }
                   onClick={handleLogin} 
                   variant='outlined' 
                   sx={{":hover":{backgroundColor:"#0073e6",color:"#ffffff"}}}>login</Button>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <SmallFooter />
      </div>
    )
  
}
