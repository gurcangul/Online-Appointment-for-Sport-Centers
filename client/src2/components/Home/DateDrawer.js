import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DatePicker from '../Pickers/DatePicker';
import { Button, IconButton, ListItemIcon, Grid } from '@material-ui/core';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useStyles from './styles';

const drawerWidth = 400;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper' :{
      right: '0',
      borderRadius : '20px',
      position: 'fixed',  
   },
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper' : openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
        <Grid item columns={4} style={{backgroundColor:'#5d4037'}}>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen } >
            {open ? <ChevronRightIcon style={{marginTop: '150px', color:'white'}}/> : <ChevronLeftIcon style={{marginTop: '150px', color:'white'}}/>}
        </IconButton>
        </Grid>
        <List>
        <ListItemButton 
                sx= {{
                  justifyContent: open ? 'initial' : 'center',
                  minHeight: 48,
                  px: 2.5,
                  }}
          >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : 0,
                  justifyContent: 'center',
                }}
              >
                 
              </ListItemIcon>
          </ListItemButton>
        </List>
        </Box>
      </Drawer>
    </Box>
  );
}





/*import React, { useState } from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { Container, Grid, Accordion, AccordionDetails, AccordionSummary, Typography, Drawer, Button } from '@material-ui/core';
import TimePiker from '../DatePiker/TimePiker';

const DateDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      {['right'].map((anchor) =>(
        <React.Fragment key={anchor}>
          <Button className={classes.button} onClick={toggleDrawer(anchor, true)}>
            <Typography align="justify">DATE</Typography>
          </Button>
          <div className={classes.drawer}>
            <Drawer
              className={classes.drawer}
              anchor={anchor}
              onClose={toggleDrawer(anchor, false)}
              open={state[anchor]}
              onClick={toggleDrawer(anchor, false)}
            >
              <TimePiker/>
            </Drawer>
          </div>
        </React.Fragment>
    ))}
    
    </Container>
  );
}

export default DateDrawer;*/
