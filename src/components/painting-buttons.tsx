import { Component } from 'react';
import * as React from 'react';
import { RaisedButton } from 'material-ui';
import { StyleSheet, css } from 'aphrodite';

interface Props {
    hidden: boolean;
}

interface State { }

export class PaintingButtons extends Component<Props, State> {

    render() {
        const style = StyleSheet.create({
            buttons: {
                opacity: this.props.hidden ? 0 : 1
            }
        });

        return (
            <div className={css(style.buttons)}>
                <RaisedButton
                    label="Keep"
                    primary={true}
                />

                <RaisedButton
                    label="Kill"
                    secondary={true}
                />
            </div>
        );
    }

}