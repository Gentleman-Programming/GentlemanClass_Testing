import { Button as MUIButton } from '@mui/material';
import React from 'react';

export const Button = ({ isDirty, isValid, children, type }) => {
  return (
    <MUIButton type={type} fullWidth variant="contained" disabled={!isDirty || !isValid}>
      {children}
    </MUIButton>
  );
};

export default Button;
