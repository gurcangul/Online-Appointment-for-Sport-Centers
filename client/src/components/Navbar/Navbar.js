import React from 'react'
import {  AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles'
import {Link} from 'react-router-dom'
import memories from '../../images/memories.png';

const Navbar = () => {
  const classes = useStyles();
  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}> 
            <Typography className={Link} to="/" variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary">Log In</Button>
              </div>
          ): (
            <Button component={Link} to="/register"  variant="contained" color="primary">Sign In</Button>
          )}
        </Toolbar>
  </AppBar>  )
}

export default Navbar


