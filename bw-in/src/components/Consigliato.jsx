import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./consigliato.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import img from "../assets/Screenshot from 2024-01-25 22-56-01.png";

export default function Consigliato() {
  return (
    <Card className="my-2">
      <Row className="w-100 align-self-center justify-content-center">
        <Row className="m-2">
          <h4 className="">Consigliato per te</h4>
          <p className="fs-7">
            <i class="bi bi-eye"></i>solo per te
          </p>
        </Row>

        <Row className="border border-subtle cb">
          <Col md={2}>
            <img src={img} className="" alt="" />
          </Col>
          <Col>
            <h5 className="fs-6 mt-2">
              Entra in contatto con una persona che ricopre il ruolo
              Sviluppatore per raggiungere i tuoi obiettivi professionali
            </h5>
          </Col>
          <Row className="m-2 p-0">
            <p className="fs-7 p-0">
              Trova persone che possono fornire indicazioni e aiutarti a trovare
              potenziali opportunità.
            </p>
          </Row>
          <Row>
            <Col md={2} className="p-0">
              <Button
                className="fw-semibold p-0 m-2"
                variant="outline-secondary"
              >
                <p className="text-nowrap m-0 p-1">Cerca persone</p>
              </Button>
            </Col>
          </Row>
        </Row>
      </Row>
    </Card>
  );
}
