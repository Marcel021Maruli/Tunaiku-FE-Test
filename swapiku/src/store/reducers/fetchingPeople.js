import { fetching_people } from '../actions/action_types'

const defaultState = {
  people: []
}

const fetchingPeopleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case fetching_people:
      let people = action.payload.data
      return { ...state, people }
    default:
      return state
  }
}


export default fetchingPeopleReducer
