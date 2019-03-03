import thunkMiddleware, { ThunkMiddleware, ThunkDispatch  } from 'redux-thunk'
import { createStore, applyMiddleware, Reducer, AnyAction } from 'redux'

import { fetchStandings, ResponseAction } from './actions'
import standingsReducer, { IState } from './reducers'

const store = createStore(
  (standingsReducer as Reducer<IState, ResponseAction | AnyAction>),
  applyMiddleware(thunkMiddleware as (ThunkMiddleware<IState, ResponseAction | AnyAction>)),
)

store.dispatch(fetchStandings()).then(() => console.log(store.getState()))


export default store;
