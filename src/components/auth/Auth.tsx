import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ImBlogger } from 'react-icons/im';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, REGISTER_USER } from '../graphql/mutation';
import { authPage } from '../../styles/auth-style';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const isLoggedIn = useSelector(((state:any) => state.isLoggedIn));
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [registerUser] = useMutation(REGISTER_USER);
  const [loginUser] = useMutation(LOGIN_USER);

  const onResponse = (response: any) => {
    if(response.signup){
      const { id, name, email} = response.signup;
      localStorage.setItem('user', JSON.stringify({ id, name, email }));
    } else {
      const { id, name, email} = response.login;
      localStorage.setItem('user', JSON.stringify({ id, name, email }));
      navigate('/blogs')
    }
    dispatch(authActions.login());
  }

  const proceedAuth = async () => {
    if (!isLogin) {
      try {
        const registerResponse = await registerUser({
          variables: {
            email: credentials.email,
            password: credentials.password,
            name,
          },
        });
        onResponse(registerResponse.data)
      } catch (err) {
        console.error(err);
        alert('Registration failed!');
      }
    } else {
      try {
        const loginResp = await loginUser({
          variables: {
            email: credentials.email,
            password: credentials.password,
          },
        });
        onResponse(loginResp.data)
      } catch (err) {
        console.error(err);
        alert('Login failed!');
      }
    }
  };


  useEffect(()=>{
    if(isLoggedIn){
      setIsLogin(false)
    }
  },[isLoggedIn])

  return (
    <Box sx={authPage.container}>
      <Box sx={authPage.logoTitle}>
        {/* @ts-ignore */}
        <ImBlogger
          size={'30px'}
          style={{
            borderRadius: '50%',
            padding: '10px',
            background: '#6c5252',
          }}
        />
        <Typography sx={authPage.logoText} variant="h4">
          DevBlog
        </Typography>
      </Box>
      <Box sx={authPage.formContainer}>
        <Typography sx={authPage.logoText}>
          {isLogin ? 'Login' : 'SignUp'}
        </Typography>
      </Box>
      <Box sx={isLogin ? authPage.signInField : authPage.signUpField}>
        {!isLogin && (
          <TextField
            id="name"
            value={name}
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <TextField
          id="email"
          value={credentials.email}
          label="Email"
          variant="outlined"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <TextField
          id="password"
          value={credentials.password}
          label="Password"
          variant="outlined"
          type='password'
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Typography>
          {isLogin ? "Don't have an account?" : 'Back to Login?'}{' '}
          <span
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'SignUp' : 'SignIn'}
          </span>
        </Typography>
        <Button
          variant="contained"
          onClick={proceedAuth}
        >
          {isLogin ? 'Sign In' : 'Register'}
        </Button>
        {/* {error && <Typography color="error">Error: {error.message}</Typography>} */}
      </Box>
    </Box>
  );
};

export default Auth;