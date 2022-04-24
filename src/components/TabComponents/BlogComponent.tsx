import React from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { blogs, Type, BlogEntry } from "../../data/writing";
import "./tabstyles.css";


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

  const displayPDF = (entry: BlogEntry): JSX.Element => {
    if (entry.type === Type.PAPER) {
      return (<iframe src={entry.pdf} width="100%" height="100%" frameBorder="0" seamless={true} />);
    }
    return <></>
  }

  const displayFooter = (flag: boolean): JSX.Element => {
    if (flag) {
      return (<Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>);
    }

    return <></>

  }

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {Array.from(blogs).map((entry, idx) => {
          return (
            <Col style={{ maxWidth: "20rem" }}>
              <Card onClick={handleShow(idx)}>
                <Card.Header>{blogs[idx].type}</Card.Header>
                <Card.Img variant="top" src={blogs[idx].image} />
                <Card.Body>
                  <Card.Title className="modal-header">{blogs[idx].title}</Card.Title>
                </Card.Body>
              </Card>
              <Modal
                className="modal"
                top="0px"
                size="xl"
                show={show === idx}
                fullscreen="xl-down"
                height={entry.type === Type.PAPER ? "500px" : undefined}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{blogs[idx].title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-pdf-body'>
                  {displayPDF(entry)}
                  <ReactMarkdown>{blogs[idx].text}</ReactMarkdown>
                </Modal.Body>
                {entry.type === Type.PAPER ? displayFooter(false) : displayFooter(true)}
              </Modal>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
