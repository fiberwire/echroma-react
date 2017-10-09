import { Component } from 'react';
import * as React from 'react';
import { Grid, Paper, Typography } from 'material-ui';
interface Props { }

interface State { }

export default class Home extends Component<Props, State> {

    render() {
        return (
            <Grid
                container={true}
                spacing={16}
                justify="space-around"
                align="center"
                direction="column"
            >
                <Grid
                    item={true}
                >
                    <Paper elevation={4}>
                        <Typography type="title">What is echroma?</Typography>
                    </Paper>
                </Grid>

            </Grid>
        );
    }

}