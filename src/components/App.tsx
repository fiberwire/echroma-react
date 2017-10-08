import PaintingEvolution from './painting-evolution';
import * as React from 'react';
import { default as genOptions } from '../options/painting-gen-options';
import { default as artOptions } from '../options/painting-art-options';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { MenuItem, Menu } from 'material-ui';

interface Props {

}

interface State {
  width: number;
  height: number;
  drawerOpen: boolean;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    const width = 192;
    const height = 108;

    this.state = {
      width, height, drawerOpen: false
    };
  }
  render() {
    const { width, height } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="echroma"
            onLeftIconButtonTouchTap={() => this.setState({ drawerOpen: !this.state.drawerOpen })}
          />
          <Drawer
            open={this.state.drawerOpen}
            docked={false}
            onRequestChange={(open) => this.setState({ drawerOpen: open })}
          >
            <Menu>
              <MenuItem>New Painting</MenuItem>
            </Menu>
          </Drawer>

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
      </MuiThemeProvider>
    );
  }
}

export default App;
