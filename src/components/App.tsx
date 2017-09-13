import * as React from 'react';
import './App.css';
import PaintingComponent from './painting';
import PaintingSpecimen from '../evolution/painting-specimen';
import { Genome } from 'enome/lib';
import { default as genOptions, PaintingGenOptions } from '../options/painting-gen-options';

interface Props {

}

interface State {
  specimen: PaintingSpecimen;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    const width = 1920;
    const height = 1080;
    
    this.state = {
      specimen: new PaintingSpecimen(new Genome<PaintingGenOptions>({
        width,
        height,
        maxX: width,
        maxY: height,
        ...genOptions
      }))
    };
  }
  render() {
    return (
      <div className="App">
        <PaintingComponent specimen={this.state.specimen} />
      </div>
    );
  }
}

export default App;
