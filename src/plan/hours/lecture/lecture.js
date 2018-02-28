import React from 'react'
import './lecture.css'
import Textarea from "react-textarea-autosize";

class Lecture extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show:false,
        };
    }
render(){
    let kolumna=5+0.08*90+(this.props.horizontal-1)*0.084*90;
    kolumna=kolumna+'vw';
    let wiersz = 7+0.16*85+(this.props.vertical-1)*7*0.85;
    wiersz=wiersz+'vh';
    let time=this.props.minutes/60*0.07*86+'vh';


    return(<div><div className={'zajecia'} onClick={()=>{this.setState({show:!this.state.show})}}  style={{top: wiersz,left: kolumna,height:time, backgroundColor: (this.props.labki===true ? "#7cb0f6" : "#7bf78d"), width: (this.props.wide===true ? '15.15%' : '7.6%')}}>
            {this.props.text.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
            })}

        </div>
        {this.state.show&&<div className={'temp'} onDoubleClick={()=>{this.setState({show:!this.state.show})}} style={{top: wiersz,left: kolumna}}><Textarea id={'textarea'} autoCorrect={'off'} spellCheck={'false'} readOnly={'true'} value={this.props.hoverText}/>{this.props.link && <a id={'link'} href={this.props.link}>{"Link"}</a>}</div> }

        </div>

    );
}
}
export default Lecture;