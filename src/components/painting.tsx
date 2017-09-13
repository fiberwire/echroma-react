import PaintingSpecimen from '../evolution/painting-specimen';
import * as React from 'react';
import * as _ from 'lodash';
import { Path } from '../models/path';

interface State {

}

interface Props {
    specimen: PaintingSpecimen;
}

export default class PaintingComponent extends React.Component<Props, State> {

    render() {
        const { width, height } = this.props.specimen.genotype.options;
        return (
            <div>
                <svg width={width} height={height}>
                    {this.renderPaths()}
                </svg>
            </div>
        );
    }

    renderPaths() {
        const g = this.props.specimen.genotype;
        const { minPaths, maxPaths } = this.props.specimen.genotype.options;
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