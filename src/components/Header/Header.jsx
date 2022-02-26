import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" style={{backgroundColor:"rgb(51,53,69)"}}>
        <Container>
          <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">All Movies</Nav.Link>
      
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="headerb">
        <a href="/movies">Movies</a>
        <a>Stream</a>
        <a>Stream</a>
        <a>Stream</a>
      </Container>
    </div>
  );
}

export default Header;
