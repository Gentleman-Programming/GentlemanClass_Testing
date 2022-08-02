import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            variant='outlined'
            label='Nombre de usuario'
            fullWidth
            {...register('username')}
          />
          <TextField
            variant='outlined'
            label='Contraseña'
            type='password'
            fullWidth
            {...register('password')}
          />
          <Button type='submit' fullWidth variant='contained'>
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};
