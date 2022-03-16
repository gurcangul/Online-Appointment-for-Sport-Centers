import React, {useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField, IconButton} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './sytles';
import Input from './Input';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link} from 'react-router-dom'

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleChange = () =>{
    }

    const handleSubmit = () =>{
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword)=>!prevShowPassword);

    const switchMode = () =>{
        setIsSignup((prevIsSignup)=>!prevIsSignup)
        handleShowPassword(false);
    }


  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3} >
            <Grid container justify="flex-end">
                <Grid item>
                    <IconButton>
                        <CancelIcon/>
                    </IconButton>
                </Grid> 
            </Grid>     
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="5">{isSignup ? 'Sign Up': 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                             <Input name="firstName" label= "First Name" handleChange={handleChange} autoFocus half/>
                             <Input name="firstName" label= "First Name" handleChange={handleChange} half/>

                            </>
                        )
                    }
                    <Input name="email" label="Email Adress" handleChange={handleChange} type="email"/>
                    <Input name="password" label="password" handleChange={handleChange} type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword}/>
                    {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                    {isSignup ? 'Sign Up' : 'Sign In' }
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode} > 
                            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }

                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>

  )
}

export default Auth