import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, Accordion, AccordionDetails, AccordionSummary, Typography, ExpansionPanel, ExpansionPanelDetails } from '@material-ui/core';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import HomePage from './HomePage';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import ButtonAppBar from '../Navbar/ButtonAppBar';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

  return (
    <Grow in>
        <Grid justify="space-between" alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={12}>
            <DrawerMenu/>
            
          </Grid>
        </Grid>
    </Grow>  
  )
}

export default Home


/* 
<Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
           <Posts setCurrentId={setCurrentId} />
        </Grid>
       <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
*/