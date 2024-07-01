'use client';
import * as React from 'react';
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
} from '@mui/material';

export default function Home() {
  return (
    <Container
      sx={{
        alignContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant='h4' gutterBottom align='center'>
        Inicia sesión o registrate para comenzar a ayudar a los animales 
      </Typography>
      <Box sx={{ borderRadius: 1, backgroundColor: 'white', padding: 4 }}>
        <Stack spacing={2}>
          <TextField
            required
            id='outlined-required'
            label='Email'
            defaultValue=''
          />
          <TextField
            required
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
          />
          <Button variant='contained'>Ingresar</Button>
        </Stack>
      </Box>
    </Container>
  );
}
