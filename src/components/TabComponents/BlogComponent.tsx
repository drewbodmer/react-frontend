import React from "react";
import { Container, Card, Button, Row, Col, Modal } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { blogs, Type, BlogEntry } from "../../data/writing";
import "./tabstyles.css";
import Masonry from 'react-masonry-css';


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
      return (<div style={{ height: "80vh" }}>
        <iframe src={entry.pdf} width="100%" height="100%" frameBorder="0" seamless={true} />
      </div>);
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
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    800: 2,
    600: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid">
      {Array.from(blogs).map((entry, idx) => {
        return (
          <Container className="grid-item" style={{ padding: "15px" }}>
            <Card className="card-pretty" style={{ width: "100%" }} onClick={handleShow(idx)}>
              <Card.Header style={{ fontSize: '1.5vh' }}>{blogs[idx].type}</Card.Header>
              <Card.Img variant="top" src={blogs[idx].image} />
              <Card.Body>
                <Card.Title className="modal-header">{blogs[idx].title}</Card.Title>
              </Card.Body>
            </Card>
            <Modal
              className="modal-open"
              size="xl"
              show={show === idx}
              fullscreen="xl-down"
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>{blogs[idx].title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {displayPDF(entry)}
                <ReactMarkdown>{blogs[idx].text}</ReactMarkdown>
              </Modal.Body>
              {entry.type === Type.PAPER ? displayFooter(false) : displayFooter(true)}
            </Modal>
          </Container>
        );
      })}
    </Masonry>
  );
}
