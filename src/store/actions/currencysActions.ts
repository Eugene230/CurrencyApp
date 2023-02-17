import ICurrency from "../../interfaces/ICurrency";

export enum CurrencysActionTypes {
  REQUEST_CURRENCYS = "REQUEST_CURRENCYS",
  REQUEST_CURRENCYS_SUCCESS = "REQUEST_CURRENCYS_SUCCESS",
  REQUEST_CURRENCYS_ERROR = "REQUEST_CURRENCYS_ERROR",
  RESET = "RESET",
}

export interface requestCurrencysAction {
  type: CurrencysActionTypes.REQUEST_CURRENCYS;
}

export const requestCurrencys = (): requestCurrencysAction => ({
  type: CurrencysActionTypes.REQUEST_CURRENCYS,
});

interface requestCurrencysSuccessAction {
  type: CurrencysActionTypes.REQUEST_CURRENCYS_SUCCESS;
  currensysList: ICurrency[];
}

export const requestCurrencysSuccess = (
    currensysList: ICurrency[]
): requestCurrencysSuccessAction => ({
  type: CurrencysActionTypes.REQUEST_CURRENCYS_SUCCESS,
  currensysList,
});

interface requestCurrencysErrorAction {
  type: CurrencysActionTypes.REQUEST_CURRENCYS_ERROR;
}

export const requestCurrencysError = (): requestCurrencysErrorAction => ({
  type: CurrencysActionTypes.REQUEST_CURRENCYS_ERROR,
});
  
  interface resetAction {
    type: CurrencysActionTypes.RESET;
  }
  
  export const reset = (): resetAction => ({
    type: CurrencysActionTypes.RESET,
  });
  
  export type CurrencysAction =
    | requestCurrencysAction
    | requestCurrencysSuccessAction
    | requestCurrencysErrorAction
    | resetAction;
