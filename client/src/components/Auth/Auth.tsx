import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from '@react-oauth/google';
import { createOrGetUser } from '../../api/index';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles';

export default function Auth() {
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
    
    const googleFailure = () => {
        console.log("Google Sign in was unsuccessful. Try again later.");
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.spacing} />
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? '회원 가입' : '로그인'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <h6> 이메일로 로그인 </h6>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} type="text" autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} type="text" half />
                            </>
                        )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign in' }
                    </Button>
                    <h6> 소셜 계정으로 로그인 </h6>
                    <div className={classes.googleLogin}>
                        <GoogleLogin
                            onSuccess={(response) => createOrGetUser(response)}
                            onError={googleFailure}
                        />
                    </div>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? `계정이 이미 있으신가요? 로그인` : `계정이 없으신가요? 회원가입` }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}
