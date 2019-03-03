import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosResponse } from 'axios';

import footBallApi from '../api';
import { IState } from './reducers';

export type ApiResponse = any;
export interface ResponseAction extends AnyAction { response: ApiResponse }


export const REQUEST_STANDINGS = 'REQUEST_STANDINGS'
export function requestStandings(): AnyAction {
  return {
    type: REQUEST_STANDINGS
  }
}

export const RECEIVED_STANDINGS = 'RECEIVED_STANDINGS'
export function receivedStandings(response: any): ResponseAction {
  return {
    type: RECEIVED_STANDINGS,
    response
  }
}

export function fetchStandings(): ThunkAction<Promise<void>, IState, undefined, AnyAction | ResponseAction> {
  return (dispatch: ThunkDispatch<IState, undefined, AnyAction | ResponseAction>) => {
    dispatch(requestStandings())
    return footBallApi.get('/competitions/PD/standings')
      .then(
        (response: AxiosResponse<ApiResponse>) => response.data,
        error => console.log('An error occurred.', error)
      ).then(response => { dispatch(receivedStandings(response)) })
  }
}
