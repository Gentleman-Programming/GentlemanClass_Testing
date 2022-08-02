import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    username: yup
      .string()
      .required('Username es requerido')
      .max(12, 'Username debe ser máximo de 12 caracteres'),
    password: yup
      .string()
      .required('Password es requerido')
      .max(12, 'Password debe ser máximo de 12 caracteres')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password debe ser alfanumérico, y contener máximo 12 caracteres, una mayúscula y un caracter especial'
      ),
  })
  .required();

export const LoginForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [errors]);

  return (
    <Box
      sx={{
        bgcolor: 'grey.300',
        borderRadius: '30px',
        height: '250px',
        p: '50px',
        width: '50%',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TextField
            variant='outlined'
            label='Nombre de usuario'
            fullWidth
            maxLength={12}
            {...register('username')}
          />
          <Typography color='red'>{errors.username?.message}</Typography>
          <TextField
            variant='outlined'
            label='Contraseña'
            type='password'
            fullWidth
            maxLength={12}
            {...register('password')}
          />
          <Typography color='red'>{errors.password?.message}</Typography>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            disabled={isDisabled}
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};
