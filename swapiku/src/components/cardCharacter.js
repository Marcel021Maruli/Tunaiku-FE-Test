import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function CardComponent(props) {
  return (
    <>
      <Card style={{ width: '18rem', margin: "1rem" }}>
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <hr />
          <Card.Text>
            B.O.D: {props.data.birth_year}
            <br />
            Eye Color: {props.data.eye_color}
          </Card.Text>
          <Button as={Link} to=
            {{
              pathname: `/details/${props.data.id}`,
              render: () => { }
            }}
            variant="primary">See Detail</Button>
        </Card.Body>
      </Card>
    </>
  )
}

