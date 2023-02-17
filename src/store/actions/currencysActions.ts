import ICurrency from "../../interfaces/ICurrency";

export enum CurrencysActionTypes {
  REQUEST_CURRENCYS = "REQUEST_CURRENCYS",
  REQUEST_CURRENCYS_SUCCESS = "REQUEST_CURRENCYS_SUCCESS",
  REQUEST_CURRENCYS_ERROR = "REQUEST_CURRENCYS_ERROR",
  RESET = "RESET",
}

export interface IRequestCurrencysAction {
  type: CurrencysActionTypes.REQUEST_CURRENCYS;
  url: string;
}

export const requestCurrencys = (url: string): IRequestCurrencysAction => ({
  type: CurrencysActionTypes.REQUEST_CURRENCYS,
  url,
});

interface IRequestCurrencysSuccessAction {
  type: CurrencysActionTypes.REQUEST_CURRENCYS_SUCCESS;
  currencysList: ICurrency[];
}

export const requestCurrencysSuccess = (
  currencysList: ICurrency[]
): IRequestCurrencysSuccessAction => ({
  type: CurrencysActionTypes.REQUEST_CURRENCYS_SUCCESS,
  currencysList,
});

interface IRequestMoviesErrorAction {
  type: CurrencysActionTypes.REQUEST_CURRENCYS_ERROR;
}

export const requestMoviesError = (): IRequestMoviesErrorAction => ({
  type: CurrencysActionTypes.REQUEST_CURRENCYS_ERROR,
});

interface IResetAction {
  type: CurrencysActionTypes.RESET;
}

export const reset = (): IResetAction => ({
  type: CurrencysActionTypes.RESET,
});

export type CurrencysAction =
  | IRequestCurrencysAction
  | IRequestCurrencysSuccessAction
  | IRequestMoviesErrorAction
  | IResetAction;
