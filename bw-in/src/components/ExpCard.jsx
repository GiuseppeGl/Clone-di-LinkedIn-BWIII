import React from 'react'
import { Card, Button, Col, Row, Badge } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../slice/deletePref'


export default function ExpCard({exp}) {


  const dispatch = useDispatch();
    console.log(exp._id)




  return (
    <Row className="border-top">
      
          <Col className="mt-2">
            <Row>
       
              <Col md={2} className="p-0">
                <img src={exp.image} className="img-fluid" alt="placeholder"/>
                
              </Col>
              <Col className="p-0">
              <div className='d-flex justify-content-end'>
                <Badge className='text-align-end btn text-white'pill bg="danger" 
                   onClick={() => dispatch(deleteExperience())}> delete</Badge>
                </div>
                <h5 className="fs-6 mt-2 mx-2 p-0 ps-1 font-weight-bold">
                 {exp.role}
                </h5>
                { (exp.endDate!=null)? (<p className="mx-2">{exp.startDate.slice(0,7)} / {exp.endDate.slice(0,7)}</p>) : (<p className="mx-2">{exp.startDate.slice(0,7)}</p>)
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
