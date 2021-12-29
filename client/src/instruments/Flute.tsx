import * as Tone from 'tone';

import "./instrument.css"
// project imports
import { Instrument, InstrumentProps } from '../Instruments';


function Flute(props: InstrumentProps) {
    var synth = new Tone.Synth({ oscillator: { type: "sine2" } }).toDestination()
    let cols = [
        {note:"C9",mt:9, ml: 23 },
        {note:"B1",mt:8, ml: 51 },
        {note:"E1",mt:8, ml: 79 },
        {note:"G1",mt:7, ml: 107 },
        {note:"F1",mt:7, ml: 135 },
        {note:"C6",mt:7, ml: 163 },
        {note:"G1",mt:7, ml: 188 },
        {note:"E3",mt:7, ml: 213 },
        {note:"D4",mt:7, ml: 236 },
        {note:"A7",mt:7, ml: 258 },
        {note:"D1",mt:7, ml: 278 },
        {note:"E5",mt:7, ml: 298 },
        {note:"G8",mt:7, ml: 318 },
        {note:"C5",mt:7, ml: 337 },
        {note:"B7",mt:7, ml: 356 },
    ]

    return (
        <div className="flute-logo flute w-96 bg-no-repeat guitar flex">
            {
                cols.map((col) => {
                    return (
                        <div onClick={()=>{synth.triggerAttackRelease(col.note,"0.20")}} className="absolute flute-pipe cursor-pointer" style={{marginLeft:col.ml+"px",marginTop:col.mt+"px"}}></div>
                    )
                })
            }

        </div>
    )
}




export const FluteInstrument = new Instrument('Flute', Flute);