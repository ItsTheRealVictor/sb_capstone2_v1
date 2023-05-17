import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Personal Website</Typography>
        <Button component={Link} to="/get-involved" color="inherit">Get Involved</Button>
        <Button component={Link} to="/events" color="inherit">Events</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/subscribe" color="inherit">Subscribe</Button>
        <Button component={Link} to="/membership" color="inherit">Membership</Button>
        <Button component={Link} to="/lawsuit" color="inherit">Lawsuit</Button>
        <Button component={Link} to="/learn-to-bike" color="inherit">Learn to Bike</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
