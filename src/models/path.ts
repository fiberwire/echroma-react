import { Genome, hexColor } from 'enome';
import * as _ from 'lodash';
import { PaintingGenOptions } from '../options/painting-gen-options';

export class Path {

  // public static drawGeneticPath(g: Genome<PaintingGenOptions>, ctx: CanvasRenderingContext2D): void {
    
  // }

  static drawLineTo(
    x: number, y: number
  ): (ctx: CanvasRenderingContext2D) => void {
    return (ctx) => {
      ctx.lineTo(x, y);
    };
  }

  static drawBezierCurveTo(
    x1: number, y1: number, x2: number, y2: number, x: number, y: number
  ): (ctx: CanvasRenderingContext2D) => void {
    return (ctx) => {
      ctx.bezierCurveTo(x1, y1, x2, y2, x, y);
    };
  }

  static drawQuadraticCurveTo(x1: number, y1: number, x: number, y: number): (ctx: CanvasRenderingContext2D) => void {
    return (ctx) => {
      ctx.quadraticCurveTo(x1, y1, x, y);
    };
  }

  static drawArc(
    x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean
  ): (ctx: CanvasRenderingContext2D) => void {
    return (ctx) => {
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    };
  }

  static drawArcTo(
    x1: number, y1: number, x2: number, y2: number, radius: number
  ): (ctx: CanvasRenderingContext2D) => void {
    return (ctx) => {
      ctx.arcTo(x1, y1, x2, y2, radius);
    };
  }

  public static geneticPath(g: Genome<PaintingGenOptions>): Path {
    const o = g.options;

    // move to the starting point of the path
    const moved = this.moveTo(
      g.g.int(o.minX, o.maxX),
      g.g.int(o.minY, o.maxY)
    );

    const length = g.g.int(o.minLength, o.maxLength);

    const paths: Path[] = _.range(length)
      .map(() => {

        // generate needed values for paths
        const {
          x, y,
          x1, y1,
          x2, y2,
          rx, ry,
          cx, cy,
          r, rotation,
          large, sweep
        } = {
            x: g.g.float(o.minX, o.maxX),
            y: g.g.float(o.minY, o.maxY),
            x1: g.g.float(o.minX, o.maxX),
            y1: g.g.float(o.minY, o.maxY),
            x2: g.g.float(o.minX, o.maxX),
            y2: g.g.float(o.minY, o.maxY),
            rx: g.g.float(o.minXRadius, o.maxXRadius),
            ry: g.g.float(o.minYRadius, o.maxYRadius),
            cx: g.g.float(o.minX, o.maxX),
            cy: g.g.float(o.minY, o.maxY),
            r: g.g.float(o.minRadius, o.maxRadius),
            rotation: g.g.float(o.minRotation, o.maxRotation),
            large: g.g.int(o.minLarge, o.maxLarge),
            sweep: g.g.int(o.minSweep, o.maxSweep)
          };

        // use a gene to determine what kind of path to make
        return g.g.element([
          moved.curveTo(x1, y1, x2, y2, x, y),
          moved.shortCurve(x2, y2, x, y),
          moved.quadraticCurve(x1, y1, x, y),
          moved.shortQuadratic(x, y),
          moved.arc(rx, ry, rotation, large, sweep, x, y),
          moved.circle(cx, cy, r)
        ]);
      });

    const combined = paths
      .map(p => p.d)
      .reduce((p, c) => `${p} ${c}`);

    // combine segments of path into one full path
    const path = new Path(combined)
      .geneticStrokeColor(g)
      .geneticStrokeWidth(g)
      .geneticFillColor(g);

    const close = g.g.bool();

    if (close) { return path.close(); } else { return path; }
  }

  public static moveTo(x: number, y: number): Path {
    const d = `M ${x} ${y}`;
    return new Path(d);
  }

  constructor(
    public d: string = '',
    public strokeWidth: number = 1,
    public strokeColor: string = '#000',
    public strokeOpacity: number = 1,
    public fillColor: string = '#000',
    public fillOpacity: number = 1
  ) { }

  public geneticStrokeColor(genotype: Genome<PaintingGenOptions>): Path {
    return new Path(
      this.d, this.strokeWidth, hexColor(genotype), this.strokeOpacity, this.fillColor, this.fillOpacity
    );
  }

  public geneticFillColor(genotype: Genome<PaintingGenOptions>): Path {
    return new Path(
      this.d, this.strokeWidth, this.strokeColor, this.strokeOpacity, hexColor(genotype), this.fillOpacity
    );
  }

  public geneticFillOpacity(genotype: Genome<PaintingGenOptions>): Path {
    const fillOpacity = genotype.g.float(
      genotype.options.style.fill.minOpacity,
      genotype.options.style.fill.maxOpacity
    );

    return new Path(this.d, this.strokeWidth, this.strokeColor, this.strokeOpacity, this.fillColor, fillOpacity);
  }

  public geneticStrokeWidth(genotype: Genome<PaintingGenOptions>): Path {
    const { minWidth, maxWidth } = genotype.options.style.stroke;
    const strokeWidth = genotype.g.float(minWidth, maxWidth);
    return new Path(this.d, strokeWidth, this.strokeColor, this.strokeOpacity, this.fillColor, this.fillOpacity);
  }

  public curveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): Path {
    const d = `C ${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public shortCurve(x2: number, y2: number, x: number, y: number): Path {
    const d = `S ${x2} ${y2} ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public quadraticCurve(x1: number, y1: number, x: number, y: number): Path {
    const d = `Q ${x1} ${y1} ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public shortQuadratic(x: number, y: number): Path {
    const d = `T ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public arc(rx: number, ry: number, rotation: number, large: number, sweep: number, x: number, y: number): Path {
    const d = `A ${rx} ${ry} ${rotation} ${large} ${sweep} ${x} ${y}`;
    return new Path(`${this.d} ${d}`);
  }

  public circle(cx: number, cy: number, r: number): Path {
    const d = `M ${cx - r}, ${cy} A ${r}, ${r} 0 1, 0 ${r * 2}, 0 A ${r}, ${r} 0 1, 0 ${-r * 2}, 0`;
    return new Path(`${this.d} ${d}`);
  }

  public close(): Path {
    const d = `Z`;

    return new Path(
      `${this.d} ${d}`, this.strokeWidth, this.strokeColor, this.strokeOpacity, this.fillColor, this.fillOpacity
    );
  }
}
