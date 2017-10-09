import { Component } from 'react';
import { Grid } from 'material-ui';
import * as React from 'react';
import PaintingEvolution from '../painting-evolution';
import { default as genOptions } from '../../options/painting-gen-options';
import { default as artOptions } from '../../options/painting-art-options';

interface Props { }
interface State {
    width: number;
    height: number;
}

export default class PaintingPage extends Component<Props, State> {

    state = { width: 333, height: 333 };

    render() {
        const { width, height } = this.state;

        return (
            <Grid
                container={true}
                justify="space-around"
                align="center"
                spacing={40}
            >
                <Grid
                    item={true}
                    xs={12}
                >
                    <PaintingEvolution
                        genOptions={{
                            ...genOptions,
                            width,
                            height,
                            maxX: width,
                            maxY: height,
                            viewWidth: width,
                            viewHeight: height
                        }}
                        artOptions={artOptions}
                    />
                </Grid>
            </Grid>
        );
    }
}