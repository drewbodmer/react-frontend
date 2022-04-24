import React from "react";
import { Modal, Card } from "react-bootstrap";

const dsresume = "/assets/datascienceresume.pdf"
const csresume = "/assets/softwareengineeringresume.pdf"

export function DataScience() {
  return (
    <Card style={{ width: "65vw", height: "100vh" }}>
      <iframe src={dsresume} width="100%" height="100%" frameBorder="0" seamless={true} />
    </Card>
  );
}

export function SoftwareEngineering() {
  return (
    <Card style={{ width: "65vw", height: "100vh" }}>
      <iframe src={csresume} width="100%" height="100%" frameBorder="0" seamless={true} />
    </Card>
  );
}