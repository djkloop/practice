import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaModdleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

// reducer
import appReducer from './models/app/reducer';
import topicReducer from './models/topic/reducer';
import userReducer from './models/user/reducer';

// saga
import appSaga from './models/app/saga';
import topicSaga from './models/topic/saga';
import userSaga from './models/user/saga';

const rootReducer = combineReducers({
  app: appReducer,
  topic: topicReducer,
  user: userReducer
});

const rootSaga = function* () {
  yield all([
    fork(appSaga),
    fork(topicSaga),
    fork(userSaga),
  ]);
}

const sagaMiddleware = createSagaModdleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
