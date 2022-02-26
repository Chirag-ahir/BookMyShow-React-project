import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Premieres() {
  return (
    <>
      <div style={{ padding: "5%" , background:"rgb(43,49,72)"}}>
        <Carousel fade-in indicators={false} variant="dark">
          <Carousel.Item interval={3000}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/400x400/?book"  style={{padding:"6%"}}/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/400x400/?girl" style={{padding:"6%"}}/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/400x400/?river" style={{padding:"6%"}}/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/400x400/?school" style={{padding:"6%"}}/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/400x400/?nature" style={{padding:"6%"}}/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/400x400/?park" style={{padding:"6%"}}/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Premieres;
