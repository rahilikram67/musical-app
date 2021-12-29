import * as Tone from 'tone';

import "./instrument.css"
// project imports
import { Instrument, InstrumentProps } from '../Instruments';


function Xylo(props: InstrumentProps) {
    var synth = new Tone.Synth({oscillator:{type:"sine2"}}).toDestination()
    let cols = [
        {h:14.0,ml:2,mt:0,note:"C3"},
        {h:13.5,ml:5,mt:4,note:"A3"},
        {h:13.0,ml:6,mt:8,note:"E1"},
        {h:12.5,ml:5,mt:12,note:"C4"},
        {h:12.0,ml:6,mt:15,note:"A4"},
        {h:11.5,ml:6,mt:19,note:"B1"},
        {h:11.0,ml:6,mt:24,note:"C8"},
        {h:10.5,ml:5,mt:28,note:"F8"},
        {h:10.0,ml:6,mt:32,note:"A7"},
        {h:9.5,ml:6,mt:36,note:"G8"},
        {h:9.0,ml:6,mt:40,note:"F4"},
        {h:8.5,ml:6,mt:44,note:"F1"},
        {h:8.0,ml:6,mt:48,note:"A0"},
        {h:7.5,ml:6,mt:52,note:"B6"},
        {h:7.0,ml:5,mt:56,note:"E9"},
    ]

    return (
        <div className="xylo-logo h-56 bg-no-repeat guitar flex">
            {
                cols.map((col) => {
                    return (
                        <div onMouseDown={()=>{synth.triggerAttackRelease(col.note,"0.10")}} className="xylo cursor-pointer" style={{height:col.h+"rem",marginLeft:col.ml+"px",marginTop:col.mt+"px"}}>
                        </div>
                    )
                })
            }
        </div>
    )
}




export const XyloInstrument = new Instrument('Xylo', Xylo);