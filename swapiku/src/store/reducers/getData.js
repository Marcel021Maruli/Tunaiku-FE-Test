import { get_data } from '../actions/action_types'

const defaultState = {
  data: []
}

const GetDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case get_data:
      let data = action.payload.data
      return { ...state, data }
    default:
      return state
  }
}


export default GetDataReducer
