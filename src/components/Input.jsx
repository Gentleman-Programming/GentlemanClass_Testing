import { Typography } from '@mui/material';
import { TextField } from '@mui/material';

const formValidation = (errors, errorKey) => {
  return errors[errorKey] ? (
    <Typography color='red'>{errors[errorKey].message}</Typography>
  ) : (
    ''
  );
};

export const Input = ({
  register,
  name,
  errors,
  label = '',
  type,
  disabled = false,
  trigger,
}) => {
  return (
    <div>
      <TextField
        required
        disabled={disabled}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        label={label}
        variant='outlined'
        {...register(name)}
        {...(trigger ? { onChange: () => trigger && trigger() } : {})}
        fullWidth
      />
      {errors && formValidation(errors, name)}
    </div>
  );
};

export default Input;
