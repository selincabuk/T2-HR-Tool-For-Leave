/* import { useState } from "react";
import "./Components.css"
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';



function RegisterationForm() {
    interface userStateString {
        state: string;
        settingState: React.Dispatch<React.SetStateAction<string>>;
    }
    // state for getting input values:
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [gender, setGender] = useState<string>("");

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === "fname")
            setFname(value as string);
        else if (id === "lname")
            setLname(value as string);
        else if (id === "email")
            setEmail(value as string);
        else if (id === "pwd")
            setPassword(value as string);
        else if (id === "pwdAgain")
            setPassword2(value as string);

    }

    const handleGenderSelectChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    return (
        <div>
            <form className="form__holder">

                <input style= {{ border: "2px solid #b3cae7"}} type="text" name="fname" placeholder="Enter first name" required className="form__input"
                     id="fname" onChange={(e) => inputChangeHandler(e)} />

                <input style= {{ border: "2px solid #b3cae7"}} type="text" name="lname" placeholder="Enter last name" required className="form__input"
                    id="lname" onChange={(e) => inputChangeHandler(e)} />

                <input style= {{ border: "2px solid #b3cae7"}} type="text" name="email" placeholder="Enter email" required className="form__input"
                    id="email" onChange={(e) => inputChangeHandler(e)} />

                <input style= {{ border: "2px solid #b3cae7"}} type="password" name="password" placeholder="Enter password" required className="form__input"
                    id="pwd" onChange={(e) => inputChangeHandler(e)} />

                <input style= {{ border: "2px solid #b3cae7"}} type="password" name="password" placeholder="Enter password again" required className="form__input"
                    id="pwdAgain" onChange={(e) => inputChangeHandler(e)} />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select className="select__input" 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            label="Gender"
                            onChange={handleGenderSelectChange}
                            style={{backgroundColor: "#f0f9ff" }}
                        >
                            <MenuItem value={"female"} style={{border: "1px solid #b3cae7" }}>Female</MenuItem>
                            <MenuItem value={"male"} style={{border: "1px solid #b3cae7"}}>Male</MenuItem>
                            <MenuItem value={"noresponse"} style={{border: "1px solid #b3cae7"}}>I prefer not to say</MenuItem>
                            <MenuItem value={"other"} style={{border: "1px solid #b3cae7"}}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <input type="date" name="bd" placeholder="Enter Birthday" required className="form__input"
                    id="bd" onChange={(e) => inputChangeHandler(e)} />

                <button type="submit" className="button__submit"><span>Register </span>  </button>
            </form>
        </div >
    );
}

export default RegisterationForm; */

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
import DatePicker from '@mui/lab/DatePicker';
import DatePickerValue from './StartDatePicker';
import "./StartDatePicker.css"


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
            marginTop: 1,
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                    sx={{ justifyContent: 'center', pl: 9 }}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Kadın" />
                    <FormControlLabel value="male" control={<Radio />} label="Erkek" />
                    <FormControlLabel value="other" control={<Radio />} label="Diğer" />
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}