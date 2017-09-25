import { Fibonacci } from './fibonacci';
import * as React from 'react';
import './App.css';

interface Props {

}

interface State {
  width: number;
  height: number;
  points: number;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    const width = 1000;
    const height = 1000;

    this.state = {
      width,
      height,
      points: 20
    };
  }
  render() {
    const { width, height, points } = this.state;

    return (
      <div className="App">
        <Fibonacci width={width} height={height} points={points} />
      </div>
    );
  }
}

export default App;
