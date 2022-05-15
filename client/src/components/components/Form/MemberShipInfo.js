import React, { useState, useEffect } from 'react';
import { Grid, IconButton, Accordion, Container, AccordionSummary, AccordionDetails, TextField } from '@material-ui/core';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Button, Divider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from './styles';
import Tooltip from '@mui/material/Tooltip';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

const MemberShipInfo = () => {
    const classes = useStyles();
    const [editName, setEditName] = React.useState(false);
    const [editMail, setEditMail] = React.useState(false);
    const [editPassword, setEditPassword] = React.useState(false);

    const [currentPassword, setCurrentPassword] = React.useState({
        password: '',
        showPassword: false,
    });
    const [newPassword, setNewPassword] = React.useState({
        password: '',
        showPassword: false,
    });
    const [againNewPassword, setAgainNewPassword] = React.useState({
        password: '',
        showPassword: false,
    });

    let checkPassword = false;

    const handleChangePassword = (prop) => (event) => {
        setCurrentPassword({ ...currentPassword, [prop]: event.target.value });
    };
    const handleChangeNewPassword = (prop) => (event) => {
        setNewPassword({ ...newPassword, [prop]: event.target.value });
        if(newPassword !== againNewPassword){
            checkPassword = true;
        }else{
            checkPassword = false;
        }
    };
    const handleChangeAgainNewPassword = (prop) => (event) => {
        setAgainNewPassword({ ...againNewPassword, [prop]: event.target.value });
        if(newPassword !== againNewPassword){
            checkPassword = true;
        }else{
            checkPassword = false;
        }
    };

    const handleClickShowNewPassword = () => {
        setNewPassword({
          ...newPassword,
          showPassword: !newPassword.showPassword,
        });
    };
    const handleClickShowPassword = () => {
        setCurrentPassword({
          ...currentPassword,
          showPassword: !currentPassword.showPassword,
        });
    };
    const handleClickShowAgainNewPassword = () => {
        setAgainNewPassword({
          ...againNewPassword,
          showPassword: !againNewPassword.showPassword,
        });
    };

    const changePassword = () => {
        if(newPassword !== againNewPassword){
            checkPassword = true;
        }else{
            checkPassword = false;
        }
    }
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
    const handleSaveName = () =>{
         
    }

    const handleSaveMail = () =>{
         
    }

    return(
        <Container className={classes.container} maxWidth="lg">      
            <Grid container>
                <Grid item xs={10} md={10}>
                    <Accordion className={classes.membershipAccordion} expanded="true" >
                        <AccordionSummary
                            style={{backgroundColor:"#01579b", borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", color: "white", display:"block!important"}}
                            aria-controls="membershipInfo-content"
                            id="membershipInfo-header"
                        >
                            <Typography sx={{width: '100%', flexShrink: 0}} className="typography" >
                                MEMBERSHIP INFORMATION
                            </Typography>
                        </AccordionSummary>
                        <Divider/>
                        <AccordionDetails>
                            <Grid>
                                <Grid cols={12} sm={12} md={12} style={{alignItems : 'center'}}>
                                    <TextField
                                            id="outlined-read-only-input"
                                            name="name" 
                                            variant="outlined" 
                                            label="Name-Surname" 
                                            style={{width:"70%", marginBottom:"15px", marginTop:"15px"}}
                                            defaultValue="Aynur Atış"
                                            InputProps={{
                                                readOnly: !editName,
                                            }}
                                    />
                                    <Tooltip title="Edit">
                                        <IconButton onClick={handleEditName}>
                                            <ModeEditIcon style={{color:"#01579b", marginTop: "15px"}}/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Save">
                                        <IconButton onClick={handleSaveName}>
                                            <SaveIcon style={{color:"#004d40", marginTop: "15px"}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid cols={12} sm={12} md={12}>
                                    <TextField
                                            id="outlined-read-only-input"
                                            name="mail" 
                                            variant="outlined" 
                                            label="User Mail" 
                                            defaultValue="aynuratis@gmail.com"
                                            style={{width:"70%", marginBottom:"15px"}}
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
                                        <IconButton onClick={handleSaveMail}>
                                            <SaveIcon style={{color:"#004d40"}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid cols={12} sm={12} md={12}>
                                    <TextField
                                        id="outlined-adornment-password"
                                        variant="outlined"
                                        label="Password"
                                        style={{width:"70%", marginBottom:"15px", marginLeft:"-50px"}}
                                        type={currentPassword.showPassword ? 'text' : 'password'}
                                        value={currentPassword.password}
                                        onChange={handleChangePassword('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                {currentPassword.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                                </InputAdornment>
                                            ),
                                            }}
                                    />
                                    <Tooltip title="Edit">
                                        <IconButton onClick={handleEditPassword}>
                                            <ModeEditIcon style={{color:"#01579b"}}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid cols={12} sm={12} md={12}>   
                                    {editPassword && 
                                    <TextField
                                            id="outlined-adornment-new-password"
                                            variant="outlined"
                                            label="New Password"
                                            style={{width:"70%", marginBottom: "15px", marginLeft:"-100px"}}
                                            type={newPassword.showPassword ? 'text' : 'password'}
                                            value={newPassword.password}
                                            onChange={handleChangeNewPassword('password')}
                                            helperText= {!checkPassword ? '' : 'Passwords are not same'}
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                     <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowNewPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                    {newPassword.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                    </IconButton>
                                                  </InputAdornment>
                                                ),
                                              }}
                                        />
                                    }
                                </Grid>
                                <Grid cols={12} sm={12} md={12}>
                                    {editPassword &&
                                    <TextField
                                            id="outlined-adornment-again-new-password"
                                            variant="outlined"
                                            label="Again New Password"
                                            style={{width:"70%", marginBottom: "15px", marginLeft: "-100px"}}
                                            type={againNewPassword.showPassword ? 'text' : 'password'}
                                            value={againNewPassword.password}
                                            onChange={handleChangeAgainNewPassword('password')}
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                     <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowAgainNewPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                    {againNewPassword.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                    </IconButton>
                                                  </InputAdornment>
                                                ),
                                              }}
                                        />
                                    }
                                </Grid>
                                <Grid cols={12} sm={12} md={12}>
                                    {editPassword && <Typography style={{marginLeft: "50px", marginBottom: "50px", float:"left"}}>
                                        <Button onClick={changePassword} style={{backgroundColor:"#01579b", color:"white"}}>Change Password</Button>
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

     