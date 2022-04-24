import React from "react";
import "./navbar-styles.css";
import { TokenContext } from "../../context/GlobalState";

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

interface NavTab {
  changeTab: Function;
}



export function NavbarComponent({ changeTab }: NavTab): JSX.Element {
  // const token = React.useContext(TokenContext);
  const token = localStorage.getItem('token');
  function displayLoginOptions() {
    if (token !== "") {
      return (
        <>
          <Nav.Link href="" eventKey="search_tracking_upload">
            Search Tracking Upload
          </Nav.Link>
          <Nav.Link href="" eventKey="logout">
            Logout
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link href="" eventKey="search_tracking">
            Search Tracking
          </Nav.Link>
          <Nav.Link href="" eventKey="login">
            Login
          </Nav.Link>
        </>
      );
    }
  }
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
              {displayLoginOptions()}
              <NavDropdown title="Resumes" id="navbarScrollingDropdown">
                <NavDropdown.Item href="" eventKey="csresume">
                  Software Engineering Resume
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" eventKey="dsresume">
                  Data Science Resume
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
