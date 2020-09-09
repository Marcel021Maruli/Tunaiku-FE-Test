import {
  fetching_films, fetching_people, get_data
} from './action_types'
import axios from 'axios'

export const fetchingFilms = (url) => {
  return async dispatch => {
    const res = await axios.get(url)
    const data = await res.data.results
    dispatch({
      type: fetching_films,
      payload: {
        data
      }
    })
  }
}


export const fetchingPeople = (url) => {
  return async dispatch => {
    const res = await axios.get(url)
    const data = await res.data.results
    dispatch({
      type: fetching_people,
      payload: {
        data
      }
    })
  }
}



export const getData = (url) => {
  return async dispatch => {
    const res = await axios.get(url)
    const data = await res.data.results
    dispatch({
      type: get_data,
      payload: {
        data
      }
    })
  }
}