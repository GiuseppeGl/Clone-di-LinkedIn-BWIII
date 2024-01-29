import React from 'react'
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

export default function ProfileComponent() {

  const [info, SetInfo] = React.useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://striveschool-api.herokuapp.com/api/profile",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdlOTkxM2Y2NTAwMThkMDk1M2YiLCJpYXQiOjE3MDYxODMzNzMsImV4cCI6MTcwNzM5Mjk3M30.jlnbNCzWMI4-v24KVu6nH7wwIrEHBS8ld2efQrYXFUo",
          },
        }
      );
      const data = response.data;
      // store.dispatch(setResponse(data));
      /*   console.log(data); */
      SetInfo(data);
      console.log(info);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card style={{ height: "50vh" }}>
      <Card.Header style={{ position: "relative", height: "35%" }}>
        <img src={info.image} id="propic" alt="propic" />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={8}>
            <Card.Title className="my-4">
              {info == {}
                ? "Nome non trovato"
                : info.name + " " + info.surname}
            </Card.Title>
            <Card.Text>
              <div className="my-2">{!info ? "no info" : info.title}</div>
              <div className="my-2">
                {info == {} ? "no info" : info.area}
              </div>
            </Card.Text>
            <Button className="fw-semibold" variant="primary">
              Disponibile per
            </Button>{" "}
            <Button className="fw-semibold" variant="outline-primary">
              Aggiungi sezione del profilo
            </Button>{" "}
          </Col>
          <Col xs={4} className="bg-success"></Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
