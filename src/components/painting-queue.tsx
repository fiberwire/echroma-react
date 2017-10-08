import { Component } from 'react';
import * as React from 'react';
import PaintingSpecimen from '../evolution/painting-specimen';

interface Props {
    specimens: { specimen: PaintingSpecimen, index: number }[];
}

interface State {

}

export default class PaintingQueue extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                queue
            </div>
        );
    }
}