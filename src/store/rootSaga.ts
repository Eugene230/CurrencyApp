import { all } from "redux-saga/effects";
import { fetchCurrencysSub } from "./sagas/getCurrencysSaga";

export default function* rootSaga() {
  yield all([fetchCurrencysSub()]);
}
