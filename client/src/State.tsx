// 3rd party
import { List, Map } from 'immutable';
import { DrumInstrument } from './instruments/Drums';
import { FluteInstrument } from './instruments/Flute';
import { GuitarInstrument } from './instruments/Guitar';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { XyloInstrument } from './instruments/xylo';
import { LineVisualizer } from './visualizers/Line';
import { CirclesVisualizer } from './visualizers/Circles';
import { WaveformVisualizer } from './visualizers/Waveform';
import { TidesVisualizer } from './visualizers/Tides';


/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument, GuitarInstrument, XyloInstrument, DrumInstrument, FluteInstrument]);
const visualizers = List([WaveformVisualizer, LineVisualizer, CirclesVisualizer, TidesVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
