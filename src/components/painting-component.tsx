import PaintingSpecimen from '../evolution/painting-specimen';
import * as React from 'react';
import * as _ from 'lodash';
import { Path } from '../models/path';
import { PaintingButtons } from './painting-buttons';
import { refill } from 'enome';
import { PaintingEnvironment } from '../evolution/painting-env';
import { Component } from 'react';
import { Grid } from 'material-ui';

interface State {
    hideButtons: boolean;
}

interface Props {
    index: number;
    specimen: PaintingSpecimen;
    viewWidth: number;
    viewHeight: number;
    viewMinX: number;
    viewMinY: number;
    env: PaintingEnvironment;
}

export default class PaintingComponent extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            hideButtons: true
        };
    }

    render() {
        const { width, height } = this.props.specimen.genotype.options;

        const { viewWidth, viewHeight, viewMinX, viewMinY } = this.props;

        return (
            <Grid
                container={true}
                className="painting-container"
                onMouseOut={() => this.setState({ hideButtons: true })}
                onMouseOver={() => this.setState({ hideButtons: false })}
                spacing={16}
                direction="column"
                justify="center"
                align="center"
            >
                <Grid
                    item={true}
                >
                    <svg width={width} height={height} viewBox={`${viewMinX} ${viewMinY} ${viewWidth} ${viewHeight}`}>
                        {this.renderPaths()}
                    </svg>
                </Grid>

                <Grid
                    item={true}
                >
                    <PaintingButtons
                        index={this.props.index}
                        hidden={this.state.hideButtons}
                        env={this.props.env}
                    />
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