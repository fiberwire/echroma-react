import * as React from 'react';
import { PaintingEnvironment } from '../evolution/painting-env';
import { PaintingGenOptions } from '../options/painting-gen-options';
import { IArtificialOptions } from 'enome';
import PaintingComponent from './painting';
import { Page, Column, Row } from 'hedron';
import * as _ from 'lodash';
import PaintingSpecimen from '../evolution/painting-specimen';

interface Props {
    genOptions: PaintingGenOptions;
    artOptions: IArtificialOptions;
    columns: number;
}

interface State {
    env: PaintingEnvironment;
    specimens: PaintingSpecimen[];
}

export default class PaintingEvolution extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        const { genOptions, artOptions } = props;
        const env = new PaintingEnvironment(artOptions, genOptions);

        this.state = {
            env,
            specimens: env.specimens.value
        };

        this.state.env.states.subscribe(s => {
            this.setState({
                specimens: s.state.specimens
            });
        });
    }

    render() {
        const cols = this.props.columns;
        const { specimens } = this.state;
        const rows = _.chunk(specimens, cols);

        return (
            <div>
                <Page>
                    {rows.map((row, i) => {
                        return <Row key={i}>
                            {row.map((spec, j) => {
                                const {
                                    width,
                                    height,
                                    minX,
                                    minY
                                } = spec.genotype.options;
                                return <Column lg={3} key={j}>
                                    <PaintingComponent
                                        key={spec.genotype.id}
                                        specimen={spec}
                                        viewWidth={width}
                                        viewHeight={height}
                                        viewMinX={minX}
                                        viewMinY={minY}
                                    />
                                </Column>;
                            })}
                        </Row>;
                    })}
                </Page>
            </div>
        );
    }
}