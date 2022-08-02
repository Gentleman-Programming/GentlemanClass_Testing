import { Box, Button, TextField, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box
      className='App'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Typography variant='h2' mb='20px' textAlign='center'>
        GentlemanClass - Testing
      </Typography>
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
    </Box>
  );
}

export default App;
