import * as React from 'react';
import { MenuItem, Menu, Toolbar, IconButton, AppBar, Drawer } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import PaintingPage from './pages/PaintingPage';

interface Props {

}

interface State {
  drawerOpen: boolean;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      drawerOpen: false
    };
  }
  render() {
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

        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/painting" component={PaintingPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
