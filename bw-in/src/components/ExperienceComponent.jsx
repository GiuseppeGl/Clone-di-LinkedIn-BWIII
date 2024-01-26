import React from 'react'
import { Card, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import ExpCard from './ExpCard';


export default function ExperienceComponent() {

    const [info, SetInfo] = React.useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://striveschool-api.herokuapp.com/api/profile/6551ed5ac55e7e0018f83c0b/experiences",
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
  return (
    <>
    <Card className="my-2">
      <Row className="w-100 align-self-center justify-content-center">
        <Row className="m-2">
          <h4 className="">Esperienze</h4>
          <p className="fs-7">
            <i className="bi bi-eye"></i>solo per te
          </p>
        </Row>
        { info && info.map((esp,index) => {
           return <ExpCard key={index} exp={esp} />
        })
        
        }
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
    </>
  )
}
