import { call, put, takeLatest, all } from "redux-saga/effects";
import ICurrency from "../../interfaces/ICurrency";
import {
  CurrencysActionTypes,
  IRequestCurrencysAction,
  requestCurrencysSuccess,
} from "../actions/currencysActions";

const fetchCurrencys = async (url: string): Promise<ICurrency> => {
  let response = await fetch(url, {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    }
  });

  let currencys = await response.json();
  return currencys;
};

function* requestCurrencysSaga(action: IRequestCurrencysAction) {
  try {
    const currencysList: ICurrency[] = yield call(fetchCurrencys, action.url);
    yield put(requestCurrencysSuccess(currencysList));
  } catch (error) {
    throw error;
  }
}

export const fetchCurrencysSub = () => {
  return takeLatest(
    CurrencysActionTypes.REQUEST_CURRENCYS,
    requestCurrencysSaga
  );
};
