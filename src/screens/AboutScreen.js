import React, { Component } from 'react'
import { SmallFooter } from '../components/Footer'
import Header from '../components/Header'

export default function AboutScreen () 
   {
    return (
        <div>
          <div>
            <Header/>
        <div className='flex flex-1 backdrop-blur-md my-10 py-10' style={{"margin": "50px", "padding": "5px"}}>
        
            

            <iframe width="500" height="500"
              src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=400">
            </iframe>

            <div className='flex flex-1 justify-top h-[40rem] flex-col p-10 text-3xl text-gray-600'>
                  About<br/>
                  <br />
                  Who We Are
                  <p style={{"font-size":"15px"}}>Write here about you app</p>
            </div>

        </div>
      </div>
    <SmallFooter />
  </div>
    )
  }