import React from 'react'
import { Card, Button, Col, Row } from "react-bootstrap";

export default function ExpCard({exp}) {
    console.log(exp)
  return (
    <Row className="border-top">
          <Col className="mt-2">
            <Row>
              <Col md={2} className="p-0">
                <img src={exp.image} alt="placeholder"/>
              </Col>
              <Col className="p-0">
                <h5 className="fs-6 mt-2 p-0 ps-1 font-weight-bold">
                 {exp.role}
                </h5>
                { (exp.endDate!=null)? (<p>{exp.startDate.slice(0,7)} / {exp.endDate.slice(0,7)}</p>) : (<p>{exp.startDate.slice(0,7)}</p>)
                }
              </Col>
            </Row>

            <Row className="m-2 p-0">
              <p className="fs-7 p-0 ps-4">
                {exp.description}
              </p>
            </Row>
          </Col>
        </Row>
  )
}
