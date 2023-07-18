import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.t2.com.tr">
        T2 Yazılım
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <CssBaseline />
        
        <Box
  component="footer"
  sx={{
    py: 0,
    px: 5,
    backgroundColor: (theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800],
    position: 'fixed', 
    bottom: 0, 
    width: '100%', 
    justifyContent: 'center'
  }}
>

<Container maxWidth="sm">
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="body1">info@t2.com.tr</Typography>
      <Copyright />
    </Box>
  </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default StickyFooter;