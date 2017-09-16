import PaintingEvolution from './painting-evolution';
import * as React from 'react';
import './App.css';
import { default as genOptions } from '../options/painting-gen-options';
import { default as artOptions } from '../options/painting-art-options';

interface Props {

}

interface State {
  width: number;
  height: number;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    const width = 192;
    const height = 108;

    this.state = {
      width, height
    };
  }
  render() {
    const { width, height } = this.state;

    return (
      <div className="App">
        <PaintingEvolution
          columns={4}
          genOptions={{
            ...genOptions,
            width,
            height,
            minX: 0,
            maxX: width,
            minY: 0,
            maxY: height
          }}
          artOptions={artOptions}
        />
      </div>
    );
  }
}

export default App;
