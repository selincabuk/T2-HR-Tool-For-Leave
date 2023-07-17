import NavigationBar from "./AdminToolComponents/NavigationBar";
import "./AdminPages.css";
import ListUsersTable from "./AdminToolComponents/ListUsersTable";
import Avatar from '@mui/material/Avatar';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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

function AdminListUsersPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1392c2', 
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
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
            <RecentActorsOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 3 }} >
            Kullanıcı Listesi
           
          </Typography>

          <ListUsersTable   />
          
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
  
  

  
  export default AdminListUsersPage;

 