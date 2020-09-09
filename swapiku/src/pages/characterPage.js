import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "../components/cardCharacter";
import { fetchingPeople } from '../store/actions'

export default function FilmPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getPeople = async () => {
      dispatch(fetchingPeople("https://swapi.dev/api/people/"))
    }
    getPeople()
  })

  const people = useSelector(state => state.people.people)

  return (
    <>
      {
        people.length > 0 ?
          people.map(el => {
            return (
              < Card key={el.name} data={el} />
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