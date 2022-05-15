import React, {useEffect, useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField, IconButton} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './sytles';
import Input from './Input';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import Alert from './Alert.js'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }
const Auth = () => {
    const [values, setValues] = useState(initialState)
    const navigate = useNavigate()
  
    const { user, showAlert, displayAlert, isLoading, registerUser, loginUser } = useAppContext()

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
      }
      
      const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})  
      }
    
      const onSubmit = (e) => {
        e.preventDefault()  
        const {name, email, password, isMember}=values
        if(!email||!password||(!isMember&&!name)){
         displayAlert()
          return
        }
        const currentUser = {name, email, password}
    
        if(isMember){
          loginUser(currentUser);
        }else {
          registerUser(currentUser)
        }
      }
    
    useEffect(()=>{
      if(user){
        setTimeout(()=>{
          navigate('/')
        },3000)
      }
    },[user, navigate])



    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const [visible, setVisible] = useState(true);
    if(!visible) return null;


    const handleShowPassword = () => setShowPassword((prevShowPassword)=>!prevShowPassword);

    const switchMode = () =>{
        setIsSignup((prevIsSignup)=>!prevIsSignup)
        handleShowPassword(false);
    }


  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <IconButton onClick={() => setVisible(false)}>
                    </IconButton>
                </Grid> 
            </Grid>     
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{isSignup ? 'Sign Up': 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={onSubmit}>
            {showAlert && <Alert />}
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                             <Input value={values.name} name="name" label= "First Name" handleChange={handleChange} autoFocus half/>                      
                            </>
                        )
                    }
                    <Input value={values.email} name="email" label="Email Adress" handleChange={handleChange} type="email"/>

                    <Input value={values.password} name="password" label="password" handleChange={handleChange} 
                        type='password'  handleShowPassword={handleShowPassword}/> 
                </Grid>       

                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={toggleMember} disabled={isLoading}>
                    {isSignup ? 'Sign Up' : 'Sign In' }
                </Button>
                <Grid container justifyContent="flex-end">
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