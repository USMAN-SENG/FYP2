import { Paper, Button } from '@mui/material'
import React, { Component } from 'react'
import Header from '../components/Header'
import TextField from '@mui/material/TextField';
import {Email,Lock} from '@mui/icons-material';
import { SmallFooter } from '../components/Footer';
import { Link } from 'react-router-dom';

export default class LoginScreen extends Component {
  render() {
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
                <br/>
                <span className='text-xs text-white'>For new Account</span>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center w-3/5 h-full'>
                <div className='flex flex-row'>
                  <Email sx={{ color: 'action.active', mr: 1, my: 2 }} />
                  <TextField label="Email" variant="standard" sx={{width:"17rem"}} />
                </div>
                <div className='flex flex-row'>
                  <Lock sx={{ color: 'action.active', mr: 1, my: 2 }} />
                  <TextField label="Password" variant="standard" sx={{width:"17rem"}} />
                </div>
                <div>
                  <Button variant='outlined' sx={{":hover":{backgroundColor:"#0073e6",color:"#ffffff"}}}>login</Button>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <SmallFooter />
      </div>
    )
  }
}
