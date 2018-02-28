import React from 'react';
import './firstRow.css'
class FirstRow extends React.Component{
    render(){
        return(
            <div className="rowFirst">
                <div className={'divSingle'}>{"Dzień"}</div>
                {Array.of('Poniedziałek','Wtorek','Środa', 'Czwartek','Piątek').map((number,index)=><div key={index} className={'days'}>{number}</div>)}
                {/*idk czy dobrym pomyslem nie byloby tego gowna wjebac do
                    jakiejs zmiennej, zeby odbywaly sie jakies optymalizacje, ale chuj, niech to tu bedzie na razie*/}
                <div className={'divSingle'} >{"Dzień"}</div>
            </div>
        );
    }
}
export default FirstRow;