import * as Tone from 'tone';

import "./instrument.css"
// project imports
import { Instrument, InstrumentProps } from '../Instruments';


function Drum(props: InstrumentProps) {
    var synth = new Tone.Synth().toDestination()
    

    return (
        <div className="drums-logo h-56 bg-no-repeat guitar">
            <div onClick={()=>{synth.triggerAttackRelease("C3","0.10")}} className="cursor-pointer circle1"></div>
            <div onClick={()=>{synth.triggerAttackRelease("B3","0.10")}} className="cursor-pointer circle2"></div>
        </div>
    )
}




export const DrumInstrument = new Instrument('Drum', Drum);