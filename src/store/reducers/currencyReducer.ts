import ICurrency from "../../interfaces/ICurrency";
import {
  CurrencysAction,
  CurrencysActionTypes,
} from "../actions/currencysActions";

export interface CurrencysState {
  currencysList: ICurrency[];
}

const CurrensysDefaultState: CurrencysState = {
  currencysList: [],
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
