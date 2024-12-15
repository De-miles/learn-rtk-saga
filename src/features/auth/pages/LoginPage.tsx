import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import { authActions } from '../authSlice';

export function LoginPage() {
  const dispatch = useAppDispatch();
  const handleLoginClick = () => {
    // TODO: Get username + pwd from login form
    dispatch(
      authActions.login({
        username: '',
        password: '',
      }),
    );
  };
  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
