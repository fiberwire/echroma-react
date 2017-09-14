import * as React from 'react';
import { PaintingEnvironment } from '../evolution/painting-env';
import { PaintingGenOptions } from '../options/painting-gen-options';
import { IArtificialOptions } from 'enome';
import PaintingComponent from './painting';
import * as ReactGridLayout from 'react-grid-layout';
import * as _ from 'lodash';

interface Props {
    genOptions: PaintingGenOptions;
    artOptions: IArtificialOptions;
    columns: number;
}

interface State {
    env: PaintingEnvironment;
}

export default class PaintingGrid extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        const { genOptions, artOptions } = props;

        this.state = {
            env: new PaintingEnvironment(artOptions, genOptions)
        };
    }

    render() {
        const cols = this.props.columns;

        return (
            <div>
                <ReactGridLayout className="layout" cols={cols} rowHeight={300}>
                    {
                        _.chunk(this.renderSpecimens(this.state.env), cols)
                            .map((row, y) => {
                                return row.map((spec, x) => {
                                    return <div key={`[${x},${y}]`} data-grid={{ x, y }}>
                                        {spec}
                                    </div>;
                                });
                            })
                    }
                </ReactGridLayout>
            </div>
        );
    }

    renderSpecimens(env: PaintingEnvironment) {
        const specs = env.currentState.state.specimens;

        return specs.map(spec => <PaintingComponent key={spec.genotype.id} specimen={spec} />);
    }
}