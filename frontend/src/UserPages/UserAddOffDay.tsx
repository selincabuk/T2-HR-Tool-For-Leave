import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import SelectExcuseLeave from './UserToolComponents/ExcuseLeaveSelect';
import DatePickerFinishValue from './UserToolComponents/FinishDatePicker';
import IconLabelButtons from './UserToolComponents/RequestOffDayButton';
import DatePickerValue from './UserToolComponents/Datepicker';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserSideBar from './UserSideBar/UserSideBar';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function UserAddOffDay() {
  return (
    <div className='page__holder'>
      <UserSideBar />
      <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin :'auto',
          }}
        >
 <Avatar sx={{ m: 1, bgcolor: '#9f5cbe' }}>
            <StickyNote2Icon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 1 }} >
            İzin İsteği
          </Typography>      
<SelectExcuseLeave  />

<Grid container spacing={10}  >
              <Grid item xs={1} sm={6}  >
              <DatePickerValue />
              </Grid>
              <Grid item  xs={1} sm={6} >
              <DatePickerFinishValue />
              </Grid>
      
      
      </Grid>
      
      <IconLabelButtons  />
        </Box>
        
      
      
    </div>
  );
}

export default UserAddOffDay;
