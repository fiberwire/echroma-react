import * as React from 'react';
import './App.css';
import PaintingComponent from './painting';
import PaintingSpecimen from '../evolution/painting-specimen';
import { Genome } from 'enome/lib';
import { default as genOptions, PaintingGenOptions } from '../options/painting-gen-options';

interface Props {

}

interface State {
  width: number;
  height: number;
  specimen: PaintingSpecimen;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    const width = 1920;
    const height = 940;

    this.state = {
      width,
      height,
      specimen: new PaintingSpecimen(new Genome<PaintingGenOptions>({
        width,
        height,
        minX: 0,
        maxX: width,
        minY: 0,
        maxY: height,
        ...genOptions
      }))
    };
  }
  render() {

    const newPainting = this.newPainting.bind(this);
    return (
      <div className="App" onClick={newPainting}>
        <PaintingComponent specimen={this.state.specimen} />
      </div>
    );
  }

  newPainting(): void {
    const { width, height } = this.state;

    this.setState({
      specimen: new PaintingSpecimen(new Genome<PaintingGenOptions>({
        width,
        height,
        minX: 0,
        maxX: width,
        minY: 0,
        maxY: height,
        ...genOptions
      }))
    });
  }
}

export default App;
