import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import { createStore, applyMiddleware, Reducer, AnyAction } from 'redux'

import { fetchStandings, ResponseAction } from './actions'
import standingsReducer, { StandingsStore } from './reducers'

const store = createStore(
  (standingsReducer as Reducer<StandingsStore, ResponseAction | AnyAction>),
  applyMiddleware(thunkMiddleware as (ThunkMiddleware<StandingsStore, ResponseAction | AnyAction>)),
)

store.dispatch(fetchStandings())/* .then(() => console.log(store.getState()) )*/


export default store;
