import React, { Component } from 'react'
import { SmallFooter } from '../../components/Footer'
import Header from '../../components/Header';
import { Calendar, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
export default class MakeAppointment extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
    }
  }
  componentDidMount(){
    this.render()
  }
  ondateChange = (date,isfinish)=>{
    this.setState({date:date},this.getcurrtiming()) 
    console.log(this.state.date.getDate())
  }
  getcurrtiming = ()=>{
    let day = this.state.date.getDay()
  }


  render() {
    const mystyle = {
        marginTop: '20px',
      };
    const mystyle2 = {
        marginLeft: '20px',
      };
    return (
      
      <div>
        <Header />
        <div className='flex flex-row h-[40rem]'>
          <div className = 'w-1/2 h-full'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Calendar date = {this.state.date} onChange = {this.ondateChange} />
            </MuiPickersUtilsProvider>
          </div>
          <div style={mystyle2}>
          <h1 style={mystyle}>Tuesday, 20 May</h1>
          <h2 style={{ color: 'grey' }}>Malaysia Time (MYT)</h2>
          <h1 style={mystyle}>No Available time slots</h1>
          <h2 style={{ color: 'grey' }}>Check the next available date</h2>
          </div>

        </div>
        <SmallFooter />
    </div>
    )
  }
}