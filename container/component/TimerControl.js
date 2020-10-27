import React from 'react';
export const TimerControl=(props)=>{
    return(
        <div className="">
            <div className="d-flex flex-row justify-content-center mt-5">
                <input type="textbox" placeholder="H" name="Hours1" className="w-25 h-25 p-3 m-1" onChange={props.hrTime} />
                <label className="p-3 m-1">:</label>
                <input type="textbox" placeholder="M" name="mins1" className="m-1 h-25 w-25 p-3" onChange={props.minTime} value={props.mTime}/>
                <label className="p-3 m-1">:</label>
                <input type="textbox" placeholder="S" name="secs1" className="w-25 h-25 p-3 m-1" onChange={props.secTime} value={props.sTime}/>
                <button name="start" className="btn btn-info btn-outline-light m-1" onClick={props.startTimer}>Start</button>
                <button name="pause" className="btn btn-primary btn-outline-light m-1" onClick={props.pauseTimer}>Pause</button>
                <button name="reset" className="btn btn-secondary btn-outline-light m-1" onClick={props.resetTimer}>Reset</button>
            </div>
        </div>
    )
}