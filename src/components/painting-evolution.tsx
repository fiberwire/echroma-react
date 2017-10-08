import * as React from 'react';
import { PaintingEnvironment } from '../evolution/painting-env';
import { PaintingGenOptions } from '../options/painting-gen-options';
import { IArtificialOptions } from 'enome';
import * as _ from 'lodash';
import PaintingSpecimen from '../evolution/painting-specimen';
import Grid from 'material-ui/Grid';
import PaintingQueue from './painting-queue';
import { PaintingSelection } from './painting-selection';

interface Props {
    genOptions: PaintingGenOptions;
    artOptions: IArtificialOptions;
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
        // const cols = this.props.columns;
        const { specimens, env } = this.state;
        const indexed = specimens.map((spec, i) => ({ specimen: spec, index: i }));
        const first3 = _.take(indexed, 3);
        const rest = _.takeRight(indexed, indexed.length - 3);

        return (
            <Grid
                container={true}
                direction="column"
                spacing={40}
            >
                <Grid item={true} xs={4}>
                    <PaintingQueue specimens={rest} />
                </Grid>

                <Grid item={true} xs={12}>
                    <PaintingSelection
                        specimens={first3}
                        env={env}
                    />
                </Grid>
            </Grid>
        );
    }
}