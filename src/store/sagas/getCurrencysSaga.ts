import { call, put, takeLatest } from "redux-saga/effects";
import ICurrency from "../../interfaces/ICurrency";
import {
  CurrencysActionTypes,
  IRequestCurrencysAction,
  requestCurrencysSuccess,
} from "../actions/currencysActions";

const fetchCurrencys = async (url: string): Promise<ICurrency[]> => {
  let response = await fetch(url, {
    // mode: 'no-cors',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    },
  });
  console.log(response);
  const currencys = await response.json();
  console.log(currencys);
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
