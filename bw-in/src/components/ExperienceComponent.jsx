import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import ExpCard from "./ExpCard";
import { useLocation, useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { useDispatch, useSelector } from "react-redux";
import { getPref } from "../slice/addPref";

export default function ExperienceComponent() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.addExperience.experience);
  const location = useLocation();
  console.log(experiences);

  useEffect(() => {
    dispatch(getPref({ userId: "65b6dacd8277b800192c90ce" }));
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isNotHomePage = location.pathname !== "/profile";

  const fetchData = () => {
   
    dispatch(getPref({ userId: "65b6dacd8277b800192c90ce" }));
  };

  const handleExperienceDelete = () => {
    // Aggiorna lo stato o richiama fetchData() per ottenere le esperienze aggiornate
    fetchData();
  };

  return (
    <>
      <Card className="my-2">
        <Row className="w-100 align-self-center justify-content-center">
          <Row className="m-2">
            <Col xs={10}>
              <h4 className="mx-2"> Esperienza</h4>
              {isNotHomePage && (
                <>
                  <Button
                    id="plusBtn"
                    style={{ marginRight: "0.1rem" }}
                    variant="outline-light-subtle"
                    onClick={() => navigate("/profile")}
                  >
                    <i className="bi bi-arrow-left"></i>
                  </Button>
                  <p className="fs-7">
                    <i className="bi bi-eye"></i>solo per te
                  </p>{" "}
                </>
              )}
            </Col>
            <Col className="text-end" xs={2}>
              <Button
                id="plusBtn"
                variant="outline-light-subtle"
                onClick={() => navigate("/edit")}
              >
                {" "}
                <i className="bi bi-plus-lg"></i>{" "}
              </Button>
              <Button
                id="plusBtn"
                variant="outline-light-subtle"
                onClick={handleShow}
              >
                {" "}
                <i className="bi bi-airplane-engines-fill"></i>{" "}
              </Button>
            </Col>
          </Row>
          {experiences &&
            experiences.map((esp, index) => {
              return <ExpCard key={esp._id} exp={esp} onDeleteExperience={(deletedExpId) => handleExperienceDelete(deletedExpId)} />;
            })}
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
      <ModalComponent show={show} onHide={handleClose} />
    </>
  );
}
