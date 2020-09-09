import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardComponent(props) {
  return (
    <>
      <Card style={{ width: '18rem', margin:"1rem" }}>
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
            Director: {props.data.director}
            <br />
            Producer: {props.data.producer}
            <br />
            Release Date: {props.data.release_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}