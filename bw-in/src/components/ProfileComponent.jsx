import React from 'react'
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProfileComponent() {

  const [info, SetInfo] = React.useState({});

  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFileUpload = () => {
    // Implementa la logica per il caricamento del file
    if (selectedFile) {
      const formData = new FormData();
      formData.append('profile', selectedFile);


      // Esegui la richiesta di caricamento del file
      axios.post(`https://striveschool-api.herokuapp.com/api/profile/${info._id}/picture`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdlOTkxM2Y2NTAwMThkMDk1M2YiLCJpYXQiOjE3MDYxODMzNzMsImV4cCI6MTcwNzM5Mjk3M30.jlnbNCzWMI4-v24KVu6nH7wwIrEHBS8ld2efQrYXFUo",
        },
      })
        .then((response) => {
          console.log('File caricato con successo:', response.data);
          // Aggiorna lo stato o esegui altre operazioni necessarie
        })
        .catch((error) => {
          console.error('Errore durante il caricamento del file:', error);
        });
    }
  };

  const handleFileChange = (event) => {
    // Gestisci il cambiamento del file
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleFileUpload();
  }, [selectedFile])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://striveschool-api.herokuapp.com/api/profile/me",
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
        <img src={info.image} id="propic" alt="propic" onClick={handleImageClick} />
      </Card.Header>
      <Modal show={showModal} onHide={handleCloseModal}>
        <img src={info.image} onClick={handleImageClick} />
        <Modal.Body>
          <p>Contenuto del tuo modal</p>
          <input type="file" onChange={handleFileChange} accept="image/*" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleFileUpload}>
            Cambia la tua immagine del Profilo
          </Button>
          <button onClick={handleCloseModal}>Chiudi</button>
        </Modal.Footer>
      </Modal>
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
