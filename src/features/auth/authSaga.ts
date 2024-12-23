import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';

function* handleLogin(payload: LoginPayload) {
  try {
    // console.log('Handle Login', payload);
    yield delay(1000);
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'miles',
      }),
    );

    // redirect to Admin page
    yield put(push('/admin'));
  } catch (error) {
    yield put(authActions.loginFailed('error'));
  }
}

function* handleLogout() {
  console.log('Handle Logout');
  localStorage.removeItem('access_token');
  // redirect to login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
