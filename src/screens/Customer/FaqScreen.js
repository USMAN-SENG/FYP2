import React, { Component } from 'react'
import FaqQuestion from '../../components/FaqQuestion'
import { SmallFooter } from '../../components/Footer'
import Header from '../../components/Header'
import ChatHome from '../../components/Chat/Index';

 const FaqScreen=()=> {
  

    const mystyle = {
        textAlign: 'center',
        marginTop: '20px',
      };
    return (
      <div>
          <div>
              <Header />
          </div>
          <div style={mystyle}>
                <span className='text-black font-semibold text-3xl  '>Frequently Asked Questions</span>
          </div>
          <div className='flex flex-col min-h-[80vh]'>
              
              <div className='flex flex-col h-full py-20 justify-start items-center'>
                {
                    <FaqQuestion ques = "Question1" index = "1" ans = "Answer1" />
                }
                {
                    <FaqQuestion ques = "Question2" index = "2" ans = "Answer2" />
                }
                {
                    <FaqQuestion ques = "Question3" index = "3" ans = "Answer3" />
                }
              </div>
          </div>
          <ChatHome/>
          <SmallFooter />
          
      </div>
    )
  }

export default FaqScreen;