import { AnyAction } from 'redux';

import {
  ResponseAction,
  REQUEST_STANDINGS,
  RECEIVED_STANDINGS
} from './actions'

import { ApiResponse } from 'src/models/ApiResponse';

export interface StandingsStore {
  isFetching?: boolean,
  results?: ApiResponse
}

function standings(
  state: StandingsStore,
  action: AnyAction|ResponseAction
) {
  switch (action.type) {
    case REQUEST_STANDINGS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVED_STANDINGS:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.response,
      })
    default:
      return state
  }
}

function standingsReducer(state: StandingsStore, action: ResponseAction|AnyAction): StandingsStore {
  switch (action.type) {
    case REQUEST_STANDINGS:
    case RECEIVED_STANDINGS:
      return Object.assign({}, state, standings(state, action))
    default:
      return state
  }
}

export default standingsReducer
