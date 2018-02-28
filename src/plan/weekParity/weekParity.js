import React from 'react'
import './weekParity.css'
class WeekParity extends React.Component{
     getWeekNumber=()=> {
        // Copy date so don't modify original
       let d = new Date();
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        // Get first day of year
        let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        // Return array of year and week number
        return Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    };

    render(){
        return(
                <div id={'parity'}>{'Tydzień jest '+(this.getWeekNumber()%2===0 ? 'parzysty' : 'nieparzysty')}</div>
        );

    }
}
export default WeekParity;
