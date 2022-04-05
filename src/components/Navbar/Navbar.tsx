import React, { SyntheticEvent } from "react";
import "./navbar-styles.css";

import {
  Container,
  Form,
  FormControl,
  Button,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

interface NavTab {
  changeTab: Function;
}

export function NavbarComponent({ changeTab }: NavTab): JSX.Element {
  const [tab, setTab] = React.useState("");
  const handleNav = (eventKey: any) => {
    setTab(eventKey);
    changeTab(eventKey);
  };

  return (
    <>
      <Navbar className="navbar navbar-expand-lg" onSelect={handleNav}>
        <Container fluid>
          <Navbar.Brand href="#">Drew Bodmer</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="" eventKey="">
                Home
              </Nav.Link>
              <Nav.Link href="" eventKey="about">
                About
              </Nav.Link>
              <Nav.Link href="" eventKey="blog">
                Blog
              </Nav.Link>
              <Nav.Link href="" eventKey="login">
                Login
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
