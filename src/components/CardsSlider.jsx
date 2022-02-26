import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CardsSlider() {
  return (
      
    <header>
    <div className="card" style={{backgroundColor:"#363748"}}>
    <h1 style={{marginTop:"3%",marginBottom:"-15px",textAlign:"center",color:"white"}}>The Best of Entertainment</h1>
    <div style={{padding:"5%"}}>
    <Carousel fade indicators={false}>
      <Carousel.Item interval={3000}>
        <CardGroup style={{display:"flex",gap:"30px",justifyContent:"space-evenly"}}>
          <Card
            className="text-white"
            style={{ height: "300px", width: "300px" }}
          >
            <Card.Img
              src="https://source.unsplash.com/400x400/?book"
              alt="Card image" style={{ height: "300px", width: "425px", padding:"3%", borderRadius:"1.5rem" }}
            />
            
          </Card>
          <Card
            className=" text-white"
            style={{ height: "300px", width: "300px" }}
          >
            <Card.Img
              src="https://source.unsplash.com/400x400/?nature"
              alt="Card image" style={{ height: "300px", width: "425px",padding:"3%", borderRadius:"1.5rem" }}
            />
           
          </Card>
          <Card
            className=" text-white"
            style={{ height: "300px", width: "300px" }}
          >
            <Card.Img
              src="https://source.unsplash.com/400x400/?place"
              alt="Card image" style={{ height: "300px", width: "425px",padding:"3%", borderRadius:"1.5rem" }}
            />
           
          </Card>
        </CardGroup>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <CardGroup style={{display:"flex",gap:"30px",justifyContent:"space-around"}}>
          <Card
            className=" text-white"
            style={{ height: "300px", width: "300px" }}
          >
            <Card.Img
              src="https://source.unsplash.com/400x400/?child"
              alt="Card image" style={{ height: "300px", width: "425px",padding:"3%", borderRadius:"1.5rem" }}
            />
            
          </Card>
          <Card
            className=" text-white"
            style={{ height: "300px", width: "300px" }}
          >
            <Card.Img
              src="https://source.unsplash.com/400x400/?girl"
              alt="Card image" style={{ height: "300px", width: "425px",padding:"3%", borderRadius:"1.5rem" }}
            />
            
          </Card>
          <Card
            className=" text-white"
            style={{ height: "300px", width: "300px" }}
          >
            <Card.Img
              src="https://source.unsplash.com/400x400/?college"
              alt="Card image" style={{ height: "300px", width: "425px",padding:"3%", borderRadius:"1.5rem" }}
            />
           
          </Card>
        </CardGroup>
      </Carousel.Item>
    </Carousel>

    </div>

    </div>
    

    </header>
    
    
  );
}

export default CardsSlider;
