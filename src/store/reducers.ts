import { AnyAction } from 'redux';

import {
  REQUEST_STANDINGS,
  RECEIVED_STANDINGS
} from './actions'

import { ApiResponse, ResponseAction } from './actions'

export interface IState {
  isFetching?: boolean,
  results?: ApiResponse
}

function standings(
  state: IState,
  action: any
) {
  switch (action.type) {
    case REQUEST_STANDINGS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVED_STANDINGS:
      return Object.assign({}, state, {
        isFetching: false,
        response: action.response,
      })
    default:
      return state
  }
}

function standingsReducer(state: IState, action: ResponseAction|AnyAction): IState {
  switch (action.type) {
    case REQUEST_STANDINGS:
    case RECEIVED_STANDINGS:
      return Object.assign({}, state, standings(state, action))
    default:
      return state
  }
}

export default standingsReducer
