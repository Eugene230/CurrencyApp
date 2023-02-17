import ICurrency from "../../interfaces/ICurrency";
import {
  CurrencysAction,
  CurrencysActionTypes,
} from "../actions/currencysActions";

export interface CurrencysState {
  currencysList: ICurrency[];
  loading: boolean;
  error: string;
}

const CurrensysDefaultState: CurrencysState = {
  currencysList: [
    { ccy: "EUR", base_ccy: "UAH", buy: 41.0, sale: 42.0 },
    { ccy: "USD", base_ccy: "UAH", buy: 39.15, sale: 39.65 },
  ],
  loading: false,
  error: "",
};

//   Actions

export const currencyReducer = (
  state = CurrensysDefaultState,
  action: CurrencysAction
) => {
  switch (action.type) {
    case CurrencysActionTypes.REQUEST_CURRENCYS: {
      return {
        ...state,
        loading: true,
      };
    }
    case CurrencysActionTypes.REQUEST_CURRENCYS_SUCCESS: {
      return {
        ...state,
        loading: false,
        movies: action.currensysList,
      };
    }
    case CurrencysActionTypes.REQUEST_CURRENCYS_ERROR: {
      return {
        ...state,
        loading: false,
        error: "Something goes wrong...",
      };
    }
    case CurrencysActionTypes.RESET: {
      return {
        ...CurrensysDefaultState,
      };
    }
    default:
      return state;
  }
};
