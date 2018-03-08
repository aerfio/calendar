import './hours.css'
import React from 'react';
import Lecture from './lecture/lecture'

class Hours extends React.Component{
    render(){
        return(
            <div>
            {Array.of('8','9','10','11','12','13','14','15','16','17','18','19').map((number,index)=>
                <div key={index} className={'hoursRow'}>
                    <div className={'left'}>
                        {number+':00-'+(parseInt(number,10)+1)+':00'}
                    </div>
                    {Array.of('','','','','','','','','','').map((num, inx)=><div key={inx} className={'blank'}>{}</div>)}
                    <div className={'right'}>
                        {number+':00-'+(parseInt(number,10)+1)+':00'}
                    </div>
                </div>)}
                {/*tak, hardkoduje to, jebac inne grupy*/}
                <Lecture text={'OSP'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=171&section=13'} hoverText={'5.03 DAQ 2\n12.03 - 23.04 projekt\n5.05 zaliczenie projektu'} horizontal={1} vertical={1.25} minutes={135} labki={true} wide={true}/>
                <Lecture text={'SISP'} hoverText={'>wykłady'} horizontal={1} vertical={5} minutes={135} labki={false} wide={true}/>
                <Lecture text={'IUW'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=389'} hoverText={'Terminy sie nie zgadzaja z poniedziałkami, wtf.'} horizontal={1} vertical={7.5} minutes={90} labki={true} wide={true}/>
                <Lecture text={'PSR'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=196'} hoverText={'13.03 ćw. 4\n27.03 ćw. 1\n10.04 ćw. 2'} horizontal={4} vertical={7} minutes={135} labki={true} wide={false}/>
                <Lecture text={'PSR'} hoverText={'>wykłady'} horizontal={5} vertical={3} minutes={90} labki={false} wide={true}/>
                <Lecture text={'KWPD'} hoverText={'>wykłady'} horizontal={5} vertical={4.5} minutes={90} labki={false} wide={true}/>
                <Lecture text={'DP'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=27'} hoverText={'7.03 - obiekt cieplny\n14.03 - obiekt hydrauliczny\n22.03 - proces wymiany ciepla\n28.03 - wolne\n11.04 - obiekty pneumatyczne'} horizontal={5} vertical={6} minutes={90} labki={true} wide={true}/>
                <Lecture text={'POC'} hoverText={'>wykłady'} horizontal={5} vertical={7.5} minutes={90} labki={false} wide={true}/>
                <Lecture text={'PR'} link={'https://platforma.polsl.pl/rau1/pluginfile.php/24379/mod_resource/content/2/Plan_PR_17_18.pdf'} hoverText={'Brak mojej sekcji na harmonogramie. fml.'} horizontal={6} vertical={9.25} minutes={90} labki={true} wide={false}/>
                <Lecture text={'SiSP'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=189'} hoverText={'https://www.facebook.com/groups/1058685264172016/permalink/2119381584769040/'} horizontal={7} vertical={1.5} minutes={180} labki={true} wide={true}/>
                <Lecture text={'ZSW'} hoverText={'Brak zajęć 29.03, 3.05, 31.05 wg harmonogramu, sprawdź to potem.'} horizontal={7} vertical={5} minutes={90} labki={true} wide={true} link={'https://platforma.polsl.pl/rau1/mod/page/view.php?id=11245'}/>
                <Lecture text={'IUW'} hoverText={'>wykłady'} horizontal={7} vertical={6.75} minutes={90} labki={false} wide={true}/>
                <Lecture text={'POC'} hoverText={'brak klucza do platformy iksde'} horizontal={9} vertical={1} minutes={90} labki={true} wide={false}/>
                <Lecture text={'KWPD'} hoverText={'Nie mam klucza do platformy iksde'} horizontal={10} vertical={1} minutes={90} labki={true} wide={false}/>
                <Lecture text={'STiOD'} link={'https://platforma.polsl.pl/rau1/course/view.php?id=188'} hoverText={'2.03 ćw.7\n9.03 ćw.1\n16.03 ćw.8\n23.03 ćw.2\n6.04 termin zapasowy; wolne\n13.04 ćw.9\n20.04 ćw.3\n27.04 ćw.10\n11.05 ćw.4\n11.05 ćw.6\n18.05 - wolne?\n25.05 ćw.5'} horizontal={9} vertical={2.5} minutes={90} labki={true} wide={true}/>
                <Lecture text={'STiOD'} hoverText={'>wykłady'} horizontal={9} vertical={4} minutes={90} labki={false} wide={true}/>
                <Lecture text={'ESS'} hoverText={'Nie mam klucza do platformy iksde'} horizontal={10} vertical={5.5} minutes={180} labki={true} wide={false}/>
                <Lecture text={'ESS'} hoverText={'>wykłady'} horizontal={9} vertical={9} minutes={90} labki={false} wide={true}/>
            </div>


        );
    }

}
export default Hours;