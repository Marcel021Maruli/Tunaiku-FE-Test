import React, { useEffect } from 'react'
import { Card, Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { getData } from '../store/actions'
import { useParams } from "react-router-dom"

export default function DetailCard() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getData(`https://swapi.dev/api/people/${id}`))
    }
    fetchData()
  })

  const data = useSelector(state => state.data)
  console.log(data, "aowkaowkaowa");

  return (
    <>
      <div className="container p-4 my-4" style={{ backgroundColor: "white", borderRadius: '20px' }} data-testid="DetailComponent">
        <Card style={{ width: '18rem', margin: "1rem" }}>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <hr />
            <Card.Text>
              B.O.D: {data.birth_year}
              <br />
            Eye Color: {data.eye_color}
              <br />
            Eye Color: {data.eye_color}
              <br />
            Eye Color: {data.eye_color}
              <br />
            Eye Color: {data.eye_color}
              <br />
            Eye Color: {data.eye_color}
              <br />
            Eye Color: {data.eye_color}
              <br />
            Eye Color: {data.eye_color}

            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>

  )
}


