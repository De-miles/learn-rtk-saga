import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

export function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('waiting 1s');
  // wait 1s
  yield delay(1000);

  console.log('Waiting done, dispatch action');

  // dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('Counter saga');

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
