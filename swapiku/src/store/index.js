import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import {
  filmReducer, peopleReducer, getDataReducer
} from './reducers'
import { getData } from './actions';

const reducers = combineReducers({
  people: peopleReducer,
  films: filmReducer,
  data: getDataReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store