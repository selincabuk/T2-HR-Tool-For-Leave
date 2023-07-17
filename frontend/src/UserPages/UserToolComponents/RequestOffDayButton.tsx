import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import "./RequestOffdayButton.css"



function IconLabelButtons() {
  return (
    <div className="button-container"  style={{height:30}}>
      <Stack direction="row" spacing={2}>
        <Button className='button' variant="contained" endIcon={<SendIcon />}>
          Request
        </Button>
      </Stack>
    </div>
  );
}

export default IconLabelButtons;
