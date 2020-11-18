import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
          time:new Date()
        }
        this.interval=null;
    }
    render() {

        return(
            <div className="Clock">
               <h3 id="time">{this.getTimeString()}</h3>
            </div>
        )
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1*1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    getTimeString(){
        const currTime=this.state.time;
        const [hours,minutes,seconds]=[currTime.getHours(),currTime.getMinutes(),currTime.getSeconds()]
       const amOrPm =hours>=12?"PM":"AM"
       const twelveHourFormat=hours>12?hours-12:hours;
      // const hourString=this.paddingTwoDigit(twelveHourFormat);
     //  console.log(hourString)
     const hourString= twelveHourFormat
       const MinuteString=this.paddingTwoDigit(minutes)
     //  console.log(MinuteString)
       const secondString=this.paddingTwoDigit(seconds)
     //  console.log(secondString)
       return hourString+":"+MinuteString+":"+secondString+" " +amOrPm
    }
 
    paddingTwoDigit(num){
        return num<10?("0"+num):(""+num)
       } 
}


export default App;
