import * as Tone from 'tone';

import "./instrument.css"
// project imports
import { Instrument, InstrumentProps } from '../Instruments';


function Guitar(props: InstrumentProps) {
    var synth = new Tone.Synth({oscillator:{type:"amsine"}}).toDestination()
    let guitarNotes = [
        {note:"A3",n:1},
        {note:"B3",n:2},
        {note:"C3",n:3},
        {note:"D3",n:4},
        {note:"E3",n:5},
        {note:"F3",n:6}
    ]

    return (
        <div className="guitar-logo h-56 bg-no-repeat guitar">
            {guitarNotes.map((note) =>(
                <div key={note.n} onMouseDown={()=>synth.triggerAttack(note.note)} onMouseUp={()=>synth.triggerRelease("+0.25")}  className={`guitar-wire-${note.n} hover:bg-blue-900 absolute guitar-wires`}>

                </div>
            ))}
        </div>
    )
}




export const GuitarInstrument = new Instrument('Guitar', Guitar);