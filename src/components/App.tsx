import PaintingEvolution from './painting-evolution';
import * as React from 'react';
import { default as genOptions } from '../options/painting-gen-options';
import { default as artOptions } from '../options/painting-art-options';
import { MenuItem, Menu, Toolbar, IconButton, AppBar, Drawer } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

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

    const width = 333;
    const height = 333;

    this.state = {
      width, height, drawerOpen: false
    };
  }
  render() {
    const { width, height } = this.state;

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" onClick={() => this.setState({ drawerOpen: true })}>
              <MenuIcon />
            </IconButton>
            echroma
            </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.drawerOpen}
          onRequestClose={() => this.setState({ drawerOpen: false })}
        >
          <Menu>
            <MenuItem>New Painting</MenuItem>
          </Menu>
        </Drawer>

        <PaintingEvolution
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
