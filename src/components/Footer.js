import React from 'react'
import {FacebookTwoTone,Twitter,Instagram} from '@mui/icons-material'
export function FullFooter() {
  return (
    <div className='bg-gray-800 flex h-50 px-10 py-5 mb-1 mx-1'>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <span className='text-white font-bold text-3xl my-3'>Offline Appointment Booking System</span>
                <span className='text-gray-200 text-xs'>
                    Company Name Private Limited,<br/>
                    Address<br/>
                    Building Address &<br/>
                    Province, 560103,<br/>
                    City, Malaysia<br/>
                    Email: test@gmail.com<br/>
                    contact: +601188982910<br/>
                </span>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row mt-10 mx-10'>
                    <div className='mx-5'>
                        <FacebookTwoTone fontSize="large" color="primary"  />
                    </div>
                    <div className='mx-5'>
                        <Twitter fontSize="large" color="primary"  />
                    </div>
                    <div className='mx-5'>
                        <Instagram fontSize="large" color="primary"  />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export function SmallFooter(){
    return (
        <div className='bg-gray-800 flex h-20 items-center px-5'>
            <span className='text-white font-bold text-xl my-3'>Offline Appointment Booking System</span>
            <div className='flex flex-row  mx-10'>
                <div className='mx-5'>
                    <FacebookTwoTone fontSize="medium" color="primary"  />
                </div>
                <div className='mx-5'>
                    <Twitter fontSize="medium" color="primary"  />
                </div>
                <div className='mx-5'>
                    <Instagram fontSize="medium" color="primary"  />
                </div>
            </div>
        </div>
    )
}