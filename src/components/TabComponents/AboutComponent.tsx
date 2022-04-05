import homepic from "../../data/home.jpg";
import React from "react";
import { Card } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Card style={{ maxWidth: "20rem" }}>
        Hello! welcome to my website. It has projects I've worked on, books I've read and liked,
        and other random ideas and notes
      </Card>
    </>
  );
}
