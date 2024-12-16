import React, { useEffect } from 'react';
import './App.css';
import cityApi from 'api/cityApi';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';
import { useAppDispatch } from 'app/hooks';
import { Button } from '@mui/material';
import { authActions } from 'features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    cityApi.getAll().then((respone) => console.log(respone));
  });

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/admin">
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        </Route>

        <Route path="">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
