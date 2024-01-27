import React from 'react'
import { Button, Col, Row, Form, Container } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postExperience } from '../slice/addPref'





export default function AddExperienceComponent() {

    const dispatch = useDispatch();

    const [info, SetInfo] = React.useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://striveschool-api.herokuapp.com/api/profile/65b227e9913f650018d0953f/experiences",
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
            console.log(data);
            console.log(info);
        } catch (error) {
            console.error(error);
        }
    };

    
    console.log(info);
    
    const navigate = useNavigate()

    return (
        <>
        < Container>
        <Row>
            <Col className='lg3'></Col>
           < Col className='lg'>
             <Form>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>role</Form.Label>
        <Form.Control type="text" placeholder="ruolo" />
      {/*   <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic2">
        <Form.Label>company</Form.Label>
        <Form.Control type="text" placeholder="azienda" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>start date</Form.Label>
        <Form.Control type="date" placeholder="Seleziona una data" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate3">
        <Form.Label>start date</Form.Label>
        <Form.Control type="date" placeholder="Seleziona una data" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic4">
        <Form.Label>description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="mi occupo di..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic5">
        <Form.Label>area</Form.Label>
        <Form.Control type="text" placeholder="città" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={() => dispatch(postExperience())}>
        Submit
      </Button>
    </Form>
    </Col>
    <Col className='lg3'></Col>
    </Row>
    </Container>
        </>
    )
}
