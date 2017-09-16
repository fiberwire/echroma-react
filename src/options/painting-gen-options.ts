
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

const options: PaintingGenOptions =  {
    width: 1920,
    height: 1080,
    minX: 0,
    maxX: 1920,
    minY: 0,
    maxY: 1080,
    genomeLength: 500,
    geneLength: 1,
    style: { ...styleOptions },
    minPaths: 2,
    maxPaths: 5,
    minLength: 1,
    maxLength: 5,
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

export default options;