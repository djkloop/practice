import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as api from '../../services/user';
import { SIGNIN, SIGNOUT } from './constants';

// fetchToken
function* fetchToken(user) {
  try {
    const token = yield call(api.signin, user);
    yield put({ type: SAVE_TOKEN, payload: token });
  } catch (err) {
    yield put({ type: REQUEST_FAILED, payload: err.message });
  }
}

// fetchUserInfo
function* fetchUserInfo() {
  try {
    const userInfo = yield call(api.getCurrentUser);
    yield put({ type: SAVE_USER, payload: userInfo });
  } catch (err) {
    yield put({ type: REQUEST_FAILED, payload: err.message });
  }
}

function* signin({ payload }) {
  yield call(fetchToken, payload);
  yield call(fetchUserInfo, token);
}

function* signout() {
  yield put({ type: SIGNOUT });
}

export default function* rootSaga() {
  yield all([
    takeEvery(SIGNIN, signin),
    takeEvery(SIGNOUT, signout)
  ]);
}
