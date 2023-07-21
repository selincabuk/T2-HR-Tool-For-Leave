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
import BadgeIcon from '@mui/icons-material/Badge';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import DatePickerValue from './StartDatePicker';
import "./StartDatePicker.css"
import StickyFooter from '../../StickyFooter';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.t2.com.tr">
        T2 YAZILIM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();



export default function SignUp() {
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
        main: '#1392c2', 
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: "4vh",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#9f5cbe' }}>
            <BadgeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kullanıcı Kaydı
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, paddingLeft: "0px" }} 
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Ad"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Soyad"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Şifre"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <Grid item xs={12}>
                <FormControl component="fieldset" sx={{ mt: 2 }}>
                  <FormLabel sx={{ justifyContent: 'center', pl: 21 }}  component="legend">Cinsiyet</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    row
                    sx={{ justifyContent: 'center', pl: 14 }}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Kadın" />
                    <FormControlLabel value="male" control={<Radio />} label="Erkek" />
                   
                  </RadioGroup>
                </FormControl>
              </Grid>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Grid item xs={12} mt={-2}>
                    <DatePickerValue/>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              KAYIT OL 
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
       {/* <Copyright sx={{ mt: 5 }} /> */}
       
      </Container>
      
    </ThemeProvider>
  );
}