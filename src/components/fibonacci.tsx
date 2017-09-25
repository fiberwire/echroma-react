import { Component } from 'react';
import * as React from 'react';

import * as _ from 'lodash';

interface Props {
    width: number;
    height: number;
    points: number;
}

interface Point {
    x: number;
    y: number;
}

interface State {
    points: Point[];
}

export class Fibonacci extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        const points = this.createPoints(this.props.points);

        this.state = {
            points
        };
    }

    createPoints(n: number): Point[] {
        const numbers = _.range(n)
            .map(i => fib(i));

        const { width, height } = this.props;

        const origin: Point = {
            x: width / 2,
            y: height / 2
        };

        let points = [origin];

        for (let i = 1; i < numbers.length; i++) {

            switch (i % 4) {
                case 0:
                    points.push({
                        x: points[points.length - 1].x + numbers[i],
                        y: points[points.length - 1].y + numbers[i],
                    });
                    break;
                case 1:
                    points.push({
                        x: points[points.length - 1].x + numbers[i],
                        y: points[points.length - 1].y - numbers[i],
                    });
                    break;
                case 2:
                    points.push({
                        x: points[points.length - 1].x - numbers[i],
                        y: points[points.length - 1].y - numbers[i],
                    });
                    break;
                case 3:
                    points.push({
                        x: points[points.length - 1].x - numbers[i],
                        y: points[points.length - 1].y + numbers[i],
                    });
                    break;
                default:
                    break;
            }
        }

        return points;
    }

    render() {
        const { width, height } = this.props;

        return (
            <svg width={width} height={height}>
                {
                    this.state.points.map((p, i) => {
                        return <circle key={i} cx={p.x} cy={p.y} r={5} />;
                    })
                }

            </svg>
        );
    }
}

function fib(n: number): number {
    if (n <= 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}