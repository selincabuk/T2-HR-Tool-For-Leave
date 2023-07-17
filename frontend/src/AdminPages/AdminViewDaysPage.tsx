import CalendarForLeave from "./AdminToolComponents/CalendarForLeave";
import NavigationBar from "./AdminToolComponents/NavigationBar";
import Avatar from '@mui/material/Avatar';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function AdminViewDaysPage() {
  return (
    <div>
      <NavigationBar />

      <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

      <Avatar sx={{ m: 1, bgcolor: '#9f5cbe' }}>
            <CalendarMonthOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: -3 }} >
            İzin Takvimi
           
          </Typography>
          </Box>
      <div className="calendar__holder">
        <CalendarForLeave />
      </div>

    </div>
  );
}

export default AdminViewDaysPage;
