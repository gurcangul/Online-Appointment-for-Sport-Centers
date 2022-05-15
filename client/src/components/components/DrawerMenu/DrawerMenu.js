

/*import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ViewListIcon from '@mui/icons-material/ViewList';
import InfoIcon from '@mui/icons-material/Info';
import Form from '../Form/Form';
import PastReservations from '../Form/PastReservations'
import HomePage from '../Home/HomePage';

const drawerWidth = 250;

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
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
  const [openAddReservation, setOpenAddReservation] = React.useState(false);
  const [openPastReservation, setOpenPastReservation] = React.useState(false);
  const [openSportProgram, setOpenSportProgram] = React.useState(false);
  const [openMmembershipInfo, setOpenMmembershipInfo] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function addReservationContent(){
    setOpenAddReservation(true);
    setOpenPastReservation(false);
    setOpenSportProgram(false);
    setOpenMmembershipInfo(false);
  }
  function pastReservationContent(){
    setOpenAddReservation(false);
    setOpenPastReservation(true);
    setOpenSportProgram(false);
    setOpenMmembershipInfo(false);
  }
  function sportProgramContent(){
    setOpenAddReservation(false);
    setOpenPastReservation(false);
    setOpenSportProgram(true);
    setOpenMmembershipInfo(false);
  }
  function membershipInfoContent(){
    setOpenAddReservation(false);
    setOpenPastReservation(false);
    setOpenSportProgram(false);
    setOpenMmembershipInfo(true);
  }

  const itemList = [
    {
      text : 'Add Reservation',
      icon : <AddCircleIcon />,
      onClick : () => addReservationContent()
    },
    {
      text : 'Past Reservations',
      icon : <ContentPasteIcon/>,
      onClick : () => pastReservationContent()
    },
    {
      text : 'Sport Program',
      icon : <ViewListIcon/>,
      onClick : () => sportProgramContent()
    },
    {
      text : 'Membership Information',
      icon : <InfoIcon />,
      onClick : () => membershipInfoContent()
    },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itemList.map((item, index) => (
            <ListItemButton
              onClick = {item.onClick}
              key={item.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                onClick = {item.onClick}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
              <Typography>
                   {openAddReservation ? <Form /> : (openPastReservation ? <PastReservations/> : 

                   (openSportProgram ? <HomePage/> : (openMmembershipInfo ? <HomePage/> : null))) }
              </Typography>
             
      </Box>
    </Box>
  );
}
*/
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ViewListIcon from '@mui/icons-material/ViewList';
import InfoIcon from '@mui/icons-material/Info';
import Form from '../Form/Form';
import PastReservations from '../Form/PastReservations'
import HomePage from '../Home/HomePage';
import UserSchedule from '../Schedule/UserSchedule';
import MemberShipInfo from '../Form/MemberShipInfo';

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: 66,
  backgroundColor : "#080808",  
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  marginTop: 66,
  backgroundColor : "#080808",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  marginTop: -60,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: 1 -theme.zIndex.drawer,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    zIndex: 1,
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openAddReservation, setOpenAddReservation] = React.useState(false);
  const [openPastReservation, setOpenPastReservation] = React.useState(false);
  const [openSportProgram, setOpenSportProgram] = React.useState(false);
  const [openMmembershipInfo, setOpenMmembershipInfo] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
function addReservationContent(){
    setOpenAddReservation(true);
    setOpenPastReservation(false);
    setOpenSportProgram(false);
    setOpenMmembershipInfo(false);
    handleDrawerOpen();
  }
  function pastReservationContent(){
    setOpenAddReservation(false);
    setOpenPastReservation(true);
    setOpenSportProgram(false);
    setOpenMmembershipInfo(false);
    handleDrawerOpen();
  }
  function sportProgramContent(){
    setOpenAddReservation(false);
    setOpenPastReservation(false);
    setOpenSportProgram(true);
    setOpenMmembershipInfo(false);
    handleDrawerOpen();
  }
  function membershipInfoContent(){
    setOpenAddReservation(false);
    setOpenPastReservation(false);
    setOpenSportProgram(false);
    setOpenMmembershipInfo(true);
    handleDrawerOpen();
  }

  const itemList = [
    {
      text : 'Add Reservation',
      icon : <AddCircleIcon />,
      onClick : () => addReservationContent(),
    },
    {
      text : 'Past Reservations',
      icon : <ContentPasteIcon/>,
      onClick : () => pastReservationContent(),
    },
    {
      text : 'Sport Program',
      icon : <ViewListIcon/>,
      onClick : () => sportProgramContent(),
    },
    {
      text : 'Membership Information',
      icon : <InfoIcon />,
      onClick : () => membershipInfoContent(),
    },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Drawer variant="permanent" open={open} onMouseOver = {handleDrawerOpen}
            onMouseLeave = {handleDrawerClose} >
        <List>
          {itemList.map((item, index) => (
            <ListItemButton
              onClick = {item.onClick}
              style= {{color: "White"}}
              key={item.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  marginLeft: 1,
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
                style= {{color : "White"}}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography>
              {openAddReservation ? <Form /> : (openPastReservation ? <PastReservations/> : 

              (openSportProgram ? <UserSchedule/> : (openMmembershipInfo ? <MemberShipInfo/> : null))) }
        </Typography>
      </Box>
    </Box>
  );
}
