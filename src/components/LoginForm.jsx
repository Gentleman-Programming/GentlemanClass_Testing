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
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data) => {
    console.log(data);
    setValues({
      ...data,
    });
    reset();
  };

  return (
    <Box
      sx={{
        bgcolor: 'grey.300',
        borderRadius: '30px',
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
            disabled={!isDirty || !isValid}
          >
            Login
          </Button>
        </Box>
      </form>
      <Box color='grey.600' mt='10px'>
        {values.username && values.password && (
          <>
            <Typography>Username: {values.username}</Typography>
            <Typography>Password: {values.password}</Typography>
          </>
        )}
      </Box>
    </Box>
  );
};
