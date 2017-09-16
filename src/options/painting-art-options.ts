import { IArtificialOptions } from 'enome';

export interface PaintingArtOptions extends IArtificialOptions {

}

const options: PaintingArtOptions = {
    interactionTime: 1,
    parents: 8,
    specimens: 16
};

export default options;