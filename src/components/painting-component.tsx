import PaintingSpecimen from '../evolution/painting-specimen';
import * as React from 'react';
import * as _ from 'lodash';
import { Path } from '../models/path';
import { refill } from 'enome';
import { PaintingEnvironment } from '../evolution/painting-env';
import { Component } from 'react';
import { Grid } from 'material-ui';

interface State {
}

interface Props {
    index: number;
    highlightKeep: (index: number) => void;
    specimen: PaintingSpecimen;
    env: PaintingEnvironment;
}

export default class PaintingComponent extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            hideSelection: true
        };
    }

    render() {
        const { width, height, viewWidth, viewHeight, viewMinX, viewMinY } = this.props.specimen.genotype.options;

        const { index, highlightKeep } = this.props;

        return (
            <Grid
                container={true}
                className="painting-container"
                spacing={16}
                direction="column"
                justify="center"
                align="center"
            >
                <Grid
                    item={true}
                >
                    <svg
                        onMouseLeave={() => highlightKeep(-1)}
                        onMouseEnter={() => highlightKeep(index)}
                        width={width}
                        height={height}
                        viewBox={`${viewMinX} ${viewMinY} ${viewWidth} ${viewHeight}`}
                    >
                        {this.renderPaths()}
                    </svg>
                </Grid>
            </Grid>
        );
    }

    renderPaths() {
        const g = refill(this.props.specimen.genotype);
        const { minPaths, maxPaths } = g.options;
        const paths = g.g.int(minPaths, maxPaths);

        return _.range(paths).map(i => {
            const path = Path.geneticPath(g);

            return (
                <path
                    key={`${g.id}-${path.d}`}
                    d={path.d}
                    strokeWidth={path.strokeWidth}
                    stroke={path.strokeColor}
                    strokeOpacity={path.strokeOpacity}
                    fill={path.fillColor}
                    fillOpacity={path.fillOpacity}
                />
            );
        });
    }
}