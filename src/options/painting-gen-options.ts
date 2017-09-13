
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
    genomeLength: 1000,
    geneLength: 5,
    style: { ...styleOptions },
    minX: 0,
    minY: 0,
    minPaths: 2,
    maxPaths: 2,
    minLength: 1,
    maxLength: 5,
    minLarge: 0,
    maxLarge: 1,
    minSweep: 0,
    maxSweep: 1,
    minRadius: 5,
    maxRadius: 50,
    minRotation: 0,
    maxRotation: 360,
    minXRadius: 5,
    maxXRadius: 50,
    minYRadius: 5,
    maxYRadius: 50,
};
