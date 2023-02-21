import { call, put, takeLatest } from "redux-saga/effects";
import ICurrency from "../../interfaces/ICurrency";
import {
  CurrencysActionTypes,
  IRequestCurrencysAction,
  requestCurrencysSuccess,
} from "../actions/currencysActions";

const fetchCurrencys = async (url: string): Promise<ICurrency[]> => {
  let response = await fetch(url, {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Accept': 'application/json',
    }
  });
  const currencys = await response.json();
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
