// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const LineVisualizer = new Visualizer(
  'Lines',
  (p5: P5, analyzer: Tone.Analyser) => {
    const values = analyzer.getValue();
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    let vapor = 5
    for (let i = 0; i < values.length; i++) {
      p5.stroke(129 + Number(values[i]) * 90, 216 + Number(values[i]) * 150, 237 + Number(values[i]) * 200)
      p5.strokeWeight(5)
      p5.line(vapor, 150 - Number(values[0]) * Math.random() * 200, vapor, 166);
      vapor += 8
    }
  },
);
