// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const CirclesVisualizer = new Visualizer(
    'Circles',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);

        p5.background(0, 0, 0, 255);

        p5.strokeWeight(dim * 0.01);
        p5.stroke(255, 255, 255, 255);
        p5.noFill();

        const values = analyzer.getValue();



        for (let i = 0; i < values.length; i++) {
            p5.fill(255 - Math.random() * 100, 255 - Math.random() * 100, 255 - Math.random() * 100);
            p5.circle(300, 170, Number(values[i]) * 700)
            p5.circle(900, 170, Number(values[i]) * 700)
        }

    },
);
