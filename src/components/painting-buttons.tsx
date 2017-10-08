import { Component } from 'react';
import * as React from 'react';
import { RaisedButton } from 'material-ui';
import { StyleSheet, css } from 'aphrodite';
import { PaintingEnvironment } from '../evolution/painting-env';

interface Props {
    hidden: boolean;
    env: PaintingEnvironment;
    index: number;
}

interface State { }

export class PaintingButtons extends Component<Props, State> {

    render() {
        const { env, index, hidden } = this.props;

        const style = StyleSheet.create({
            buttons: {
                opacity: hidden ? 0 : 1
            }
        });

        return (
            <div className={css(style.buttons)}>
                <RaisedButton
                    label="Keep"
                    primary={true}
                    onClick={() => {
                        env.keep([index]);
                    }}
                />

                <RaisedButton
                    label="Kill"
                    secondary={true}
                    onClick={() => {
                        env.kill([index]);
                    }}
                />
            </div>
        );
    }

}