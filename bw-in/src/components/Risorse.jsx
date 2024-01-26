import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

export default function Risorse() {
  return (
    <Card className="my-2">
      <Row className="w-100 align-self-center justify-content-center">
        <Row className="m-2">
          <h4 className="">Risorse</h4>
          <p className="fs-7">
            <i className="bi bi-eye"></i>solo per te
          </p>
        </Row>
        <Row className="p-0">
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
              <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
            </svg>
          </Col>
          <Col className="p-0">
            <h5 className="fs-6 mt-2 ps-3">
              Modalita' creazione di contenuti [no]
            </h5>
          </Col>
          <Row className="m-2 p-0">
            <p className="fs-7 p-0 ps-5">
              Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
              accedi agli strumenti di creazione
            </p>
          </Row>
        </Row>
        <Row className="border-top">
          <Col className="mt-2">
            <Row>
              <Col md={1} className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
              </Col>
              <Col className="p-0">
                <h5 className="fs-6 mt-2 p-0 ps-1 font-weight-bold">
                  La mia rete
                </h5>
              </Col>
            </Row>

            <Row className="m-2 p-0">
              <p className="fs-7 p-0 ps-4">
                Salva e gestisci i tuoi collegamenti e interessi
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="p-0 text-center">
          <Button
            className="fw-semibold p-0 text-center border-0 border-top rounded-0"
            variant="outline-secondary"
          >
            <p className="text-nowrap m-0 p-1">Mostra tutte le risorse</p>
          </Button>
        </Row>
      </Row>
    </Card>
  );
}
