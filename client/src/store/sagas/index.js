import { all } from 'redux-saga/effects';

import movies from './movies';

export default function* rootSaga() {
  yield all([movies()]);
}
