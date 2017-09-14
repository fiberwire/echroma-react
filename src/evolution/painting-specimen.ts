import { ISpecimen, Genome } from 'enome';
import { Painting } from '../models/painting';

import * as _ from 'lodash';
import { Path } from '../models/path';
import { PaintingGenOptions } from '../options/painting-gen-options';

export default class PaintingSpecimen implements ISpecimen<PaintingGenOptions, Painting> {

  phenotype: Painting;

  constructor(public genotype: Genome<PaintingGenOptions>, public age: number = 0) {
    this.phenotype = this.createPhenotype(genotype);
  }

  ageSpecimen(n: number): PaintingSpecimen {
    return new PaintingSpecimen(this.genotype, this.age + n);
  }

  public createPhenotype(genotype: Genome<PaintingGenOptions>): Painting {
    const g = genotype;
    const o = g.options;

    // use a gene to determine how many paths to make
    const paths = _.range(g.g.int(o.minPaths, o.maxPaths))
      .map(() => {
        return Path.geneticPath(this.genotype);
      });

    return new Painting(o.width, o.height, paths);
  }

  // public drawOnCanvas(canvas: HTMLCanvasElement): void {
  //   const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');
  //   const g = this.genotype;
  //   const o = g.options;

  //   _.range(g.g.int(o.minPaths, o.maxPaths))
  //     .forEach(i => {
  //       Path.drawGeneticPath(g, ctx);
  //     });
  // }

}
