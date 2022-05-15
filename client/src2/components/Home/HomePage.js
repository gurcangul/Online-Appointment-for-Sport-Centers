import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import useStyles from './styles';
import Form from '../Form/Form';
import DateDrawer from './DateDrawer';
import PastReservations from '../Form/PastReservations'
import DrawerMenu from '../DrawerMenu/DrawerMenu';


const HomePage = () => {

    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();

    const [currentId, setCurrentId] = useState(0);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    

    return (
        <Container className={classes.container} maxWidth="lg">      
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Accordion className={classes.accordion1} expanded={expanded === 'addReservation'} onChange={handleChange('addReservation')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
                            aria-controls="addReservationbh-content"
                            id="addReservationbh-header"
                        >
                            <Typography sx={{width: '55%', flexShrink: 0}} className="typography">
                                ADD RESERVATION
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Grid item sm={10} md={10}>
                                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                                </Grid>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion  className={classes.accordion2} expanded={expanded === 'pastReservation'} onChange={handleChange('pastReservation')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon  style={{color:'white'}} />}
                            aria-controls="pastReservationbh-content"
                            id="pastReservationbh-header"
                        >
                            <Typography sx={{width: '55%', flexShrink: 0}}>
                                PAST RESERVATION
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Grid item sm={10} md={10}>
                                    <PastReservations  />
                                </Grid>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion3} expanded={expanded === 'sportProgram'} onChange={handleChange('sportProgram')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon  style={{color:'white'}}/>}
                            aria-controls="sportProgrambh-content"
                            id="sportProgrambh-header"
                        >
                            <Typography sx={{width: '55%', flexShrink: 0}}>
                               SPORT PROGRAM
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                fkdjsglkdfjhljdfglhjlg
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion4} expanded={expanded === 'memInfo'} onChange={handleChange('memInfo')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon  style={{color:'white'}}/>}
                            aria-controls="memInfobh-content"
                            id="memInfobh-header"
                        >
                            <Typography sx={{width: '55%', flexShrink: 0}}>
                               MEMBERSHIP INFORMATION
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                fkdjsglkdfjhljdfglhjlg
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
               
            </Grid>
        </Container>
    )
}

export default HomePage;

/*  <Grid item xs={2} md={2} className={classes.drawer}>
                    <DateDrawer></DateDrawer>
                </Grid>*/