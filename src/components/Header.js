import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  const mystyle = {
    maxWidth: 150,
  };
  return (
    <div className='flex flex-row w-full px-5 py-3 font-bold bg-slate-800 text-white'>
         <div className='flex-initial w-2/6'>
          <div style={mystyle}><img src={require('./BookingZen.png')} /></div>
        </div>
        <div className='flex-1 hover:underline'><Link to={"/"}>Home</Link></div>
        <div className='flex-1 hover:underline'><Link to={"/AboutScreen"}> About us</Link></div>
        <div className='flex-1 hover:underline'><Link to = {"/signup"}>Sign up</Link></div>
    </div>
  )
}
