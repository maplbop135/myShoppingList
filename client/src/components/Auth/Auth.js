import React, { useState } from 'react';
import { Avatar, TextField, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles';

export default function Auth(){
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }
    
    const googleSuccess = (res) => {
        console.log(res);
    };
    
    const googleFailure = () => {
        console.log("Google Sign in was unsuccessful. Try again later.");
    };
    
    const googleSocialLogin = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
        flow: 'auth-code'
    })

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.spacing} />
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? '회원 가입' : '로그인'}</Typography>
                <hr />
                <GoogleLogin
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <hr />
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign in' }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
  }
  
  