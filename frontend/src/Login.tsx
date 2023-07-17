/* import React, { useState } from "react";
import "./Login.css";

function Login() {
  // States
  const [errorMessages, setErrorMessages] = useState<{ name: string, message: string }>({ //hataları ve mesajları içeren nesne
    name: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);//formun gönderilip gönderilmediğini kontrol etmek için nesne
  const [rememberMe, setRememberMe] = useState(false);//remember me seçeneğinin durumunu tutmak için oluşturulan nesne

  //kontrol edilecek database dizisi
  const database = [
    {
      usereMail: "user1",
      password: "pass1"
    },
    {
      usereMail: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    emaill: "invalid email",
    pass: "invalid password"
  };

  //formun gönderilmesi
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //sayfa yenilenmesini engeller
    event.preventDefault();

    var { email, pass } = document.forms[0];//formdan email ve şifre alınır

    // databaseden giriş bilgileri bulunur
    const userData = database.find((user) => user.usereMail === email.value);

    // kullanıcı bilgilerini karşılaştırır
    if (userData) {
      if (userData.password !== pass.value) {
        // şifre geçersizse
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // kullanıcı adı bulunamazsa
      setErrorMessages({ name: "emaill", message: errors.emaill });
    }
  };

  // hata mesajı
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // login formu JSX
  const renderForm = (
    <div className="form"> 
    

      <form onSubmit={handleSubmit}>
        <div className="input-container" style={{color: "white" }}>  
          <label>Email </label>
          <input type="text" name="emaill" placeholder="Enter email" required />
          {renderErrorMessage("emaill")} 
        </div>
        <div className="input-container" style={{color: "white"}}>
          <label>Password </label>
          <input type="password" name="pass" placeholder="Enter password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container" style={{color: "white"}}>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
        </div>
        <div className="button-container">
          <input type="submit"  />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title" style={{color: "white", textAlign:"center"}} >Login</div>
        {isSubmitted ? (
          <div>Admin is successfully logged in</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;

 */

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.t2.com.tr">
        T2 Yazılım
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const theme = createTheme({
  palette: {
    primary: {
      main: '#1392c2', // İstediğiniz bir renk değeri
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#9f5cbe' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Oturum Aç
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
             
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Beni Hatırla"
            />
            <Button className="button" style={{ verticalAlign: 'middle' }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              

            >
              Oturum Aç
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" paddingLeft={18} >
                  Şifremi Unuttum
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}