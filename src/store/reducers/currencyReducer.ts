import ICurrency from "../../interfaces/ICurrency";
import {
  CurrencysAction,
  CurrencysActionTypes,
} from "../actions/currencysActions";

export interface CurrencysState {
  currencysList: ICurrency[];
}

const CurrensysDefaultState: CurrencysState = {
  currencysList: [
    { ccy: "EUR", base_ccy: "UAH", buy: "40.90000", sale: "41.90000" },
    { ccy: "USD", base_ccy: "UAH", buy: "39.20000", sale: "39.70000" },
  ],
};

export const currencyReducer = (
  state = CurrensysDefaultState,
  action: CurrencysAction
) => {
  switch (action.type) {
    case CurrencysActionTypes.REQUEST_CURRENCYS: {
      return {
        ...state,
      };
    }
    case CurrencysActionTypes.REQUEST_CURRENCYS_SUCCESS: {
      return {
        ...state,
        currencysList: action.currencysList,
      };
    }
    // case CurrencysActionTypes.REQUEST_CURRENCYS_ERROR: {
    //   return {
    //     ...state,
    //     error: "Something goes wrong...",
    //   };
    // }
    case CurrencysActionTypes.RESET: {
      return {
        ...CurrensysDefaultState,
      };
    }
    default:
      return state;
  }
};
