import { fetching_films } from '../actions/action_types'

const defaultState = {
  films: []
}

const FetchingFilmsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case fetching_films:
      let films = action.payload.data
      return { ...state, films: films }
    default:
      return state
  }
}


export default FetchingFilmsReducer
