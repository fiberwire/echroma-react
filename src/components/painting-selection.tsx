import { Component } from 'react';
import PaintingSpecimen from '../evolution/painting-specimen';
import * as React from 'react';
import PaintingComponent from './painting-component';
import { PaintingEnvironment } from '../evolution/painting-env';
import { Grid } from 'material-ui';
import { CheckCircle, DeleteForever } from 'material-ui-icons';

interface Props {
    specimens: { specimen: PaintingSpecimen, index: number }[];
    env: PaintingEnvironment;
}

interface State {
    keep: number;
}

export class PaintingSelection extends Component<Props, State> {

    state = { keep: -1 };

    highlightKeep(index: number) {
        this.setState({
            keep: index
        });
    }

    render() {
        const { specimens, env } = this.props;
        const { keep } = this.state;

        const highlightKeep = this.highlightKeep.bind(this);
        return (
            <Grid
                container={true}
                justify="space-around"
                spacing={24}
            >
                {specimens.map(spec => {
                    return (
                        <Grid
                            item={true}
                            xs={3}
                            key={spec.index}
                        >
                            <Grid
                                container={true}
                                direction="column"
                                align="center"
                            >
                                <Grid item={true}>
                                    <PaintingComponent
                                        index={spec.index}
                                        specimen={spec.specimen}
                                        env={env}
                                        highlightKeep={highlightKeep}
                                    />
                                </Grid>

                                <Grid item={true}>
                                    <div>{
                                        keep === -1 ? '' :
                                            keep === spec.index ? <CheckCircle /> : <DeleteForever/>
                                    }</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}