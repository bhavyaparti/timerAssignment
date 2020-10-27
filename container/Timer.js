import React from 'react';
import moment from 'moment';
import { TimerControl } from '../component/TimerControl';
moment().format();
export class Timer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            hrs:undefined,
            min:undefined,
            sec:undefined,
            c:1,
        }
        this.endtime=0;        
        this.hours=0;
        this.mins=0;
        this.secs=0;
        
    }
    hourTime=(event) =>
    {
        this.hours=event.target.value;
        this.setState({hrs:this.hours});
        console.log("Hrs time changed",this.hours);
    }
    minTime=(event)=>
    {
        this.mins=event.target.value;
        console.log("Mimute time changed",this.mins);
    }
    secTime=(event)=>
    {
        this.secs=event.target.value;
        console.log("Seconds time changed",this.secs);
        
    }
    
    calcTime = () =>
    {
        this.endtime=moment().add(this.hours,'h').add(this.mins,'m').add(this.secs,'s');
        this.diffTime=this.endtime.diff(moment());
    }
    showTimer=()=>
    {
        this.calcTime();
        this.setState({hrs:this.hours,min:this.mins,sec:this.secs});
        this.hours=Math.floor((this.diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.mins=Math.floor((this.diffTime % (1000 * 60 * 60)) / (1000 * 60));
        this.secs=Math.floor((this.diffTime % (1000 * 60)) / 1000);
        if(this.diffTime<0)
        {
            clearInterval(this.interval);
        }
        
    }
    startTimer()
    {
        
        this.interval=setInterval(this.showTimer,1000);
        
    }
    pauseTimer=()=>
    {
        if(this.state.c)
        {
            clearInterval(this.interval);
            this.setState({hrs:this.hours,min:this.mins,sec:this.secs,c:0});
            this.hours=this.state.hrs;
            this.mins=this.state.min;
            this.secs=this.state.sec;
        }
        else
        {
            this.startTimer();
            this.setState({hrs:this.hours,min:this.mins,sec:this.secs,c:1});
        }
    }
    resetTimer=()=>
    {
        clearInterval(this.interval);
        this.setState({hrs:undefined,min:undefined,sec:undefined});
    }
    render()
    {
        return(
            <>
            <h1 className="text-center alert-info">{this.props.heading}</h1>
            <TimerControl hrTime={this.hourTime.bind(this)} minTime={this.minTime.bind(this)} secTime={this.secTime.bind(this)} showTimer={this.showTimer.bind(this)} startTimer={this.startTimer.bind(this)} 
            hTime={this.state.hrs} mTime={this.state.min} sTime={this.state.sec} pauseTimer={this.pauseTimer.bind(this)} resetTimer={this.resetTimer.bind(this)}/>

            </>
        )
    }
    

}