import { Component } from 'react';
import PaintingSpecimen from '../evolution/painting-specimen';
import * as React from 'react';
import PaintingComponent from './painting-component';
import { PaintingEnvironment } from '../evolution/painting-env';
import { Grid } from 'material-ui';
import { StyleSheet, css } from 'aphrodite';

interface Props {
    specimens: { specimen: PaintingSpecimen, index: number }[];
    env: PaintingEnvironment;
}

interface State {

}

export class PaintingSelection extends Component<Props, State> {

    render() {
        const { specimens, env } = this.props;
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
                            className={css(styles.painting)}
                        >
                            <PaintingComponent
                                index={spec.index}
                                specimen={spec.specimen}
                                viewWidth={192}
                                viewHeight={108}
                                viewMinX={0}
                                viewMinY={0}
                                env={env}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    painting: {
    }
});