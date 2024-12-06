import { Box, Button, Container, Paper, Typography } from '@mui/material';
import * as React from 'react';

export function LoginPage() {
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
          <Button fullWidth variant="contained" color="primary">
            Fake Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
