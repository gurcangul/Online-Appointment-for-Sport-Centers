import React, { useState, useEffect } from 'react';
import { Grid, IconButton, Accordion, Container, AccordionSummary, AccordionDetails, TextField } from '@material-ui/core';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Button, Divider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from './styles';
import Tooltip from '@mui/material/Tooltip';
import SaveIcon from '@mui/icons-material/Save';

const MemberShipInfo = () => {
    const classes = useStyles();
    const [editName, setEditName] = React.useState(false);
    const [editMail, setEditMail] = React.useState(false);
    const [editPassword, setEditPassword] = React.useState(false);

    const handleEditName = () =>{
        if(!editName){
            setEditName(true);
        }else{
            setEditName(false)
        }    
    }
    const handleEditMail = () =>{
        if(!editMail){
            setEditMail(true);
        }else{
            setEditMail(false)
        }    
    }
    const handleEditPassword = () =>{
        if(!editPassword){
            setEditPassword(true);
        }else{
            setEditPassword(false)
        }    
    }
    const handleChangePassword = () => {
        // içi dolacak
    }

    return(
        <Container className={classes.container} maxWidth="lg">      
            <Grid container>
                <Grid item xs={10} md={6}>
                    <Accordion className={classes.membershipAccordion} expanded="true" >
                        <AccordionSummary
                            style={{backgroundColor:"#01579b", borderTopLeftRadius: "50px",  borderTopRightRadius: "50px", color: "white"}}
                            aria-controls="membershipInfo-content"
                            id="membershipInfo-header"
                        >
                            <Typography sx={{width: '65%', flexShrink: 0}} className="typography" >
                                MEMBERSHIP INFORMATION
                            </Typography>
                        </AccordionSummary>
                        <Divider/>
                        <AccordionDetails>
                            <Grid>
                                <Grid cols={12} sm={12} md={12} style={{alignItems : 'center'}}>
                                    <Typography style={{margin: "15px", float:"left"}}>
                                        <TextField
                                                id="outlined-read-only-input"
                                                name="name" 
                                                variant="outlined" 
                                                label="Name-Surname" 
                                                defaultValue="Aynur Atış"
                                                InputProps={{
                                                    readOnly: !editName,
                                                }}
                                        />
                                        <Tooltip title="Edit">
                                            <IconButton onClick={handleEditName}>
                                                <ModeEditIcon style={{color:"#01579b"}}/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Save">
                                            <IconButton onClick={handleEditName}>
                                                <SaveIcon style={{color:"#004d40"}}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Typography>
                                </Grid>
                                <Grid cols={12} sm={12} md={12}>
                                    <Typography style={{marginLeft: "15px", marginBottom: "15px", float:"left"}}>
                                        <TextField
                                                id="outlined-read-only-input"
                                                name="mail" 
                                                variant="outlined" 
                                                label="User Mail" 
                                                defaultValue="aynuratis@gmail.com"
                                                InputProps={{
                                                    readOnly: !editMail,
                                                }}
                                        />
                                        <Tooltip title="Edit">
                                            <IconButton onClick={handleEditMail}>
                                                <ModeEditIcon style={{color:"#01579b"}}/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Save">
                                            <IconButton onClick={handleEditMail}>
                                                <SaveIcon style={{color:"#004d40"}}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Typography>
                                </Grid>
                                <Grid cols={12} sm={12} md={12}>
                                    <Typography style={{marginLeft: "15px" ,float:"left"}}>
                                        <TextField
                                            type="password"
                                            id="outlined-read-only-input"
                                            name="password" 
                                            variant="outlined" 
                                            label="Password" 
                                            defaultValue="aynuratis@gmail.com"
                                            InputProps={{
                                                readOnly: !editPassword,
                                            }}
                                        />
                                        <Tooltip title="Edit">
                                            <IconButton onClick={handleEditPassword}>
                                                <ModeEditIcon style={{color:"#01579b"}}/>
                                            </IconButton>
                                        </Tooltip>
                                        
                                    </Typography>
                                </Grid>
                                <Grid cols={12} sm={12} md={12}>   
                                    {editPassword && <Typography style={{margin: "15px", float:"left"}}>
                                        <TextField
                                            type="password"
                                            id="outlined-read-only-input"
                                            name="newpassword" 
                                            variant="outlined" 
                                            label="New Password" 
                                            defaultValue="aynuratis@gmail.com"
                                            
                                        />
                                    </Typography>}
                                    {editPassword && <Typography style={{marginLeft: "15px", marginBottom: "15px", float:"left"}}>
                                        <TextField
                                            type="password"
                                            id="outlined-read-only-input"
                                            name="newpasswordagain" 
                                            variant="outlined" 
                                            label="New Password Again" 
                                            defaultValue="aynuratis@gmail.com"
                                            
                                        />
                                    </Typography>}
                                    {editPassword && <Typography style={{marginLeft: "40px", float:"left"}}>
                                        <Button onClick={handleChangePassword} style={{backgroundColor:"#01579b", color:"white"}}>Change Password</Button>
                                    </Typography>}
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    )

}
export default MemberShipInfo;