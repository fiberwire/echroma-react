import PaintingSpecimen from '../evolution/painting-specimen';
import * as React from 'react';
import * as _ from 'lodash';
import { Path } from '../models/path';
import { PaintingButtons } from './painting-buttons';
import { refill } from 'enome';

interface State {
    hideButtons: boolean;
}

interface Props {
    specimen: PaintingSpecimen;
    viewWidth: number;
    viewHeight: number;
    viewMinX: number;
    viewMinY: number;
}

export default class PaintingComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            hideButtons: true
        };
    }

    render() {
        const { height } = this.props.specimen.genotype.options;

        const { viewWidth, viewHeight, viewMinX, viewMinY } = this.props;

        return (
            <div
                className="painting-container"
                onMouseOut={() => this.setState({ hideButtons: true })}
                onMouseOver={() => this.setState({ hideButtons: false })}
            >
                <svg width="100%" height={height} viewBox={`${viewMinX} ${viewMinY} ${viewWidth} ${viewHeight}`}>
                    {this.renderPaths()}
                </svg>
                <PaintingButtons hidden={this.state.hideButtons} />
            </div>
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