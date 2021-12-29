// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const TidesVisualizer = new Visualizer(
    'Tides',
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
            // curve 100% wide
            let p1 = { x: 5- Number(values[i])  * 20, y: 150 + Number(values[i]) * 200 };
            let p2 = { x: 1100 - Number(values[i])  * 20, y: 150 - Number(values[i]) * 200 };
            let p3 = { x: 1100 - Number(values[i])  * 20, y: 150 - Number(values[i]) * 200 };

            p5.noFill();
            p5.stroke(255, 102, 0);
            p5.curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
            p5.stroke(300);
            p5.curve(p1.x, p1.y + 20, p1.x, p1.y + 20, p2.x, p2.y + 20, p3.x, p3.y + 20);
            p5.stroke(300, 200, 300);
            p5.curve(p1.x, p1.y + 40, p1.x, p1.y + 40, p2.x, p2.y + 40, p3.x, p3.y + 40);
            p5.stroke(300, 100, 250);
            p5.curve(p1.x, p1.y + 60, p1.x, p1.y + 60, p2.x, p2.y + 60, p3.x, p3.y + 60);

        }

    },
);
