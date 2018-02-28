import './plan.css'
import React from 'react';
import FirstRow from './firstRow/firstRow'
import SecondRow from './secondRow/secondRow'
import Hours from './hours/hours'
import WeekParity from './weekParity/weekParity'

//todo change it to function instead of class if you can down the road
class Plan extends React.Component{
    render(){
//todo dodaj link do repo na githubie gdzies na dole po prawej
        return(<div>
                <WeekParity/>
                <div id={'container'}>
                    <FirstRow/>
                    <SecondRow/>
                    <Hours/>

            </div>
                <a id={'podzial'} href={'https://docs.google.com/spreadsheets/d/1nyIpk-EQaqEcx6jRcCc5lBai_KL89SS30L8dJzf4iBQ/edit#gid=2020654902'}>{'Podział na grupy'}</a>
            </div>

        ) ;
   }

}
export default Plan;