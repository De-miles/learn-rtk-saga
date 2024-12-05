import React, { useEffect } from 'react';
import './App.css';
import cityApi from 'api/cityApi';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
  useEffect(() => {
    cityApi.getAll().then((respone) => console.log(respone));
  });

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        ></Route>

        <Route path="" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
