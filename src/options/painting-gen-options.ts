
import { IGenomeOptions } from 'enome';
import { default as styleOptions, StyleOptions } from './style-options';

export interface PaintingGenOptions extends IGenomeOptions {

    style: StyleOptions;

    width: number;
    height: number;

    // min and max coordinates
    minX: number;
    maxX: number;

    minY: number;
    maxY: number;

    // number of paths
    minPaths: number;
    maxPaths: number;

    // number of segments in path
    minLength: number;
    maxLength: number;

    // arcs
    minXRadius: number;
    maxXRadius: number;

    minYRadius: number;
    maxYRadius: number;

    minRotation: number;
    maxRotation: number;

    minLarge: number;
    maxLarge: number;

    minSweep: number;
    maxSweep: number;

    // circles
    minRadius: number;
    maxRadius: number;
}

export default {
    genomeLength: 5000,
    geneLength: 1,
    style: { ...styleOptions },
    minPaths: 50,
    maxPaths: 100,
    minLength: 1,
    maxLength: 3,
    minLarge: 0,
    maxLarge: 1,
    minSweep: 0,
    maxSweep: 1,
    minRadius: 1,
    maxRadius: 100,
    minRotation: 0,
    maxRotation: 360,
    minXRadius: 1,
    maxXRadius: 100,
    minYRadius: 1,
    maxYRadius: 100,
};
