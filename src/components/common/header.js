import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Home, List, Search, Sort } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles'


const styles = {
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12
  }
}

// eslint-disable-next-line react/display-name
const AdapterNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);


const Header = ({ classes }) => (
  <header>
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h4">
          HARVESTR
        </Typography>

        <section className={classes.rightToolbar}>
          <Button component={AdapterNavLink} to="/"><Home />Home</Button>
          <Button component={AdapterNavLink} to="/profile"><Search />Search Profile</Button>
          <Button component={AdapterNavLink} to="/ranking"><Sort />Ranking</Button>
          <Button component={AdapterNavLink} to="/harvest"><List />Results</Button>
        </section>
      </Toolbar>
    </AppBar>
  </header>
);


export default withStyles(styles)(Header);