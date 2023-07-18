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
import StickyFooter from '../StickyFooter';
import DatePickerValue from './UserToolComponents/Datepicker';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function UserAddOffDay() {
  return (
    <div >
      <NavigationBarUser />
      <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
<SelectExcuseLeave />

<Grid container spacing={-110}>
              <Grid item xs={1} sm={6}>
              <DatePickerValue />
              </Grid>
              <Grid item xs={1} sm={6}>
              <DatePickerFinishValue />
              </Grid>
      
      
      </Grid>
      
      <IconLabelButtons  />
        </Box>
        
      <StickyFooter />
      
    </div>
  );
}

export default UserAddOffDay;
