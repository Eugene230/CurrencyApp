import { combineReducers } from "redux";
import { currencyReducer, CurrencysState } from "./reducers/currencyReducer";

export interface RootState {
    currencys: CurrencysState;
  }

export const rootReducer = combineReducers({ currencys: currencyReducer });
