import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";

function AllMovies() {
    console.log(
        data
    )
  return (
    <div>
      <Container fluid style={{padding:"3%"}}>
        <Row style={{ textAlign: "left" }}>
            {data.map((mov)=>
          <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
            <Card.Img
              variant="top"
              src={mov.image}
              style={{ padding: "6%" }}
            />
            <Card.Body>
              <Card.Title>{mov.title}</Card.Title>
              <Card.Text>
                {mov.actor}
              </Card.Text>
            </Card.Body>
          </Col>
            )}
        </Row>
      </Container>
    </div>
  );
}
export default AllMovies;
