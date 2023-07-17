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
import DatePickerValue from '../AdminToolComponents/StartDatePicker';
import {useState} from 'react';

interface User {
    id: number,
    fname: string,
    lname: string,
    email: string,
    gender: string,
    birthday: string,
    pwd: string,
}

interface UserProps {
    user: User
}

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

function EditUserForm({ user }: UserProps) {

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

    // states for selection values:
    const [genderSelection, setGenderSelection] = useState<string>(user.gender);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#9f5cbe' }}>
                        <BadgeIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Kullanıcı Bilgilerini Düzenle
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
                                    autoFocus
                                    defaultValue={user.fname}
                                    placeholder={user.fname}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    autoComplete="family-name"
                                    defaultValue={user.lname}
                                    placeholder={user.lname}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    defaultValue={user.email}
                                    placeholder={user.email}
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
                                        <FormLabel sx={{ justifyContent: 'center', pl: 21 }} component="legend">Cinsiyet</FormLabel>
                                        <RadioGroup
                                            aria-label="gender"
                                            name="gender"
                                            row
                                            sx={{ justifyContent: 'center', pl: 9 }}
                                        >
                                            <FormControlLabel value="kadın" control={<Radio />} label="Kadın" checked={genderSelection === "kadın"}/>
                                            <FormControlLabel value="erkek" control={<Radio />} label="Erkek" />
                                            <FormControlLabel value="diğer" control={<Radio />} label="Diğer" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} mt={-2}>
                            <DatePickerValue />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                        >
                            Kaydet
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    )
}

export default EditUserForm;