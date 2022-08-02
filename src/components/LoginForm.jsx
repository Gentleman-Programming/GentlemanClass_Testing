import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
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
      <form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField variant='outlined' label='Nombre de usuario' fullWidth />
          <TextField
            variant='outlined'
            label='Contraseña'
            type='password'
            fullWidth
          />
          <Button fullWidth variant='contained'>
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};
