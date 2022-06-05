import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
   <div className='flex flex-row w-full px-5 py-3 font-bold bg-cyan-600 text-white'> 
        
        <div className='flex-initial w-2/4'>logo</div>
         
        <div className='flex-1 hover:underline'><Link to={"/"}>Home</Link></div>
        <div className='flex-1 hover:underline'><Link to={"AboutScreen"}> About us</Link></div>
        <div className='flex-1 hover:underline'><Link to = {"/signup"}>Sign up</Link></div>
        <div className='flex-1 hover:underline'><Link to = {"/MakeAppointment"}>Booking</Link></div>
        <div className='flex-1 hover:underline'><Link to = {"/FaqScreen"}>FAQs</Link></div>
    </div>
  )
}
