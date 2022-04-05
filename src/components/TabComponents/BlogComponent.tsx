import React from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import blogs from "../../data/writing";
import "./tabstyles.css";
import { Page, Document } from 'react-pdf';

import ReactPDF from 'react-pdf';

export default function Blog() {
  const [show, setShow] = React.useState(-1);

  const handleClose = () => {
    setShow(-1);
  };
  const handleShow = (index: number) => {
    return () => {
      setShow(index);
    };
  };

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {Array.from(blogs).map((_, idx) => {
          return (
            <Col style={{ maxWidth: "20rem" }}>
              <Card onClick={handleShow(idx)}>
                <Card.Header>{blogs[idx].type}</Card.Header>
                <Card.Img variant="top" src={blogs[idx].image} />
                <Card.Body>
                  <Card.Title>{blogs[idx].title}</Card.Title>
                </Card.Body>
              </Card>
              <Modal
                size="xl"
                show={show === idx}
                fullscreen="xl-down"
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{blogs[idx].title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Document file={process.env.PUBLIC_URL + '/assets/finalreport.pdf'}>
                </Document>
                  <ReactMarkdown>{blogs[idx].text}</ReactMarkdown>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
