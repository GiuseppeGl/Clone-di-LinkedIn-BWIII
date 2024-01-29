import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import Consigliato from "../components/Consigliato";
import Analisi from "../components/Analisi";
import Risorse from "../components/Risorse";
import ProfileComponent from "../components/ProfileComponent";
import ExperienceComponent from "../components/ExperienceComponent";


export default function MainComponent() {

  return (
    <div id="main">
      <div id="center">
        <div id="settanta">
          <ProfileComponent />
          <Consigliato />
          <Analisi />
          <Risorse />
          <ExperienceComponent/>
        </div>
        <div id="trenta"></div>
      </div>
    </div>
  );
}
