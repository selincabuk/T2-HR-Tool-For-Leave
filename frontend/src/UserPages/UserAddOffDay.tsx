import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import SelectExcuseLeave from './UserToolComponents/ExcuseLeaveSelect';
import DatePickerValue from './UserToolComponents/StartDatePicker';
import DatePickerFinishValue from './UserToolComponents/FinishDatePicker';



function UserAddOffDay() {
  return (
    <div className="select__container" >
      <NavigationBarUser />
      <SelectExcuseLeave />
      <DatePickerValue />
      <DatePickerFinishValue />
     
     
    </div>
  );
}

export default UserAddOffDay;
