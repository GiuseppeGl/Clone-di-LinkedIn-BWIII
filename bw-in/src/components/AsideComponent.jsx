import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function AsideComponent() {

    const [profili, SetProfili] = useState([])

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
            console.log(data);
            SetProfili(data.slice(0,10))
            console.log(profili)
        } catch (error) {
            console.log(error);
        }
    };
    console.log(profili);
    return (
        <Card className="text-center">
            <Card.Header>Persone che potresti conoscere</Card.Header>

            <Card.Body>

                {
                    profili.map((ele,index) => {
                        return <Row key={index} className="my-1">
                        <Col xs={4}>
                            <img src={ele.image} className="img-fluid" alt="propic" />
                        </Col>
                        <Col xs={8}>
                            <Card.Title>{ele.name + " " + ele.surname}</Card.Title>
                            <Card.Text>
                                {ele.title}
                            </Card.Text>
                        </Col>
                        <Button variant="outline-dark" className='roundedP mt-2 mb-5 w-50 mx-auto'><i className="bi bi-send"></i> Messaggio</Button>
                    </Row>
                    })
                }
               


                
            </Card.Body>

            <Card.Footer className="text-muted">Mostra tutto</Card.Footer>
        </Card>
    )
}
