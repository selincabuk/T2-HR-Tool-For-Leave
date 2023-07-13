import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import SelectExcuseLeave from './UserToolComponents/ExcuseLeaveSelect';

function UserAddOffDay() {
  return (
    <div className="select__container" style={{margin:"center"}}>
      <NavigationBarUser />
      <SelectExcuseLeave />
     
    </div>
  );
}

export default UserAddOffDay;
