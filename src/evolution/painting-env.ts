import { reproduceManyToOne, ArtificialSelection, Genome, IArtificialOptions } from 'enome';
import { Painting } from '../models/painting';
import PaintingSpecimen from './painting-specimen';
import { PaintingGenOptions } from '../options/painting-gen-options';

export class PaintingEnvironment extends ArtificialSelection<PaintingGenOptions, Painting> {

    constructor(public options: IArtificialOptions, public genOptions: PaintingGenOptions) {
        super(options, genOptions);
    }

    createSpecimen(): PaintingSpecimen {
        return new PaintingSpecimen(new Genome(this.genOptions));
    }

    reproduceSpecimen(parents: PaintingSpecimen[]): PaintingSpecimen {
        const genotypes = parents.map(p => p.genotype);
        return new PaintingSpecimen(reproduceManyToOne(genotypes));
    }

}
