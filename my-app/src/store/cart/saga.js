import { takeLatest, put, delay } from 'redux-saga/effects';

//worker saga
function* ageUpAsync() {
  yield delay(400);
  yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}

//Watcher saga
export function* watchAgeUp() {
  yield takeLatest('AGE_UP', ageUpAsync);
}

//Note saga act as reducer and middle ware for async task
