import React, { useEffect } from "react"
import Card from '../components/cardFilm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingFilms } from '../store/actions'

export default function FilmPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getFilms = async () => {
      dispatch(fetchingFilms("https://swapi.dev/api/films/"))
    }
    getFilms()
  })

  const films = useSelector(state => state.films.films)
  return (
    <>
      {
        films.length > 0 ?
          films.map(el => {
            return (
              < Card key={el.episode_id} data={el} />
            )
          })

          :
          <p>
            No data
          </p>
      }
    </>
  )
}