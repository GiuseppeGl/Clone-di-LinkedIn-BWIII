import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import img from "../assets/Screenshot from 2024-01-25 22-56-01.png";
export default function Analisi() {
  return (
    <Card className="my-2">
      <Row className="w-100 align-self-center justify-content-center">
        <Row className="m-2">
          <h4 className="">Analisi</h4>
          <p className="fs-7">
            <i class="bi bi-eye"></i>solo per te
          </p>
        </Row>
        <Row className="">
          <Col md={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
          </Col>
          <Col clasnnName="p-0">
            <h5 className="fs-6 mt-2 p-0 ps-1">
              0 visualizzazioni del profilo
            </h5>
          </Col>
          <Row className="m-2 p-0">
            <p className="fs-7 p-0 ps-5">
              Aggiorna il tuo profilo per attrarre visitatori
            </p>
          </Row>
        </Row>
        <Row className="p-0 text-center">
          <Button
            className="fw-semibold p-0 text-center border-0 border-top rounded-0"
            variant="outline-secondary"
          >
            <p className="text-nowrap m-0 p-1">Mostra tutte le analisi</p>
          </Button>
        </Row>
      </Row>
    </Card>
  );
}
