import React from 'react';
import './secondRow.css'
class SecondRow extends React.Component{
    render(){
        return(
            <div className={'rowSecond'}>
                <div className={'weekSingle'}>{"Tydzień"}</div>
                {/*pewnie sie to da ladniej zrobic, ale ctrlc ctrlv jest szybsze*/}
                {Array.of('P','N').map((number,index)=><div className={'PN'} key={index}>{number}</div>)}
                {Array.of('P','N').map((number,index)=><div className={'PN'} key={index}>{number}</div>)}
                {Array.of('P','N').map((number,index)=><div className={'PN'} key={index}>{number}</div>)}
                {Array.of('P','N').map((number,index)=><div className={'PN'} key={index}>{number}</div>)}
                {Array.of('P','N').map((number,index)=><div className={'PN'} key={index}>{number}</div>)}
                <div className={'weekSingle'} >{"Tydzień"}</div>
            </div>
        );
    }
}
export default SecondRow