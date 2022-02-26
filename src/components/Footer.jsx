import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function Footer(){
    return(
        <>
        <footer>
        <div style={{backgroundColor:"black",color:"white"}}>
            <Container fluid>
                <Row style={{padding:"3%"}}>
                    <Col xs={2}>List your show</Col>
                    <Col xs={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum numquam inventore eaque exercitationem!</Col>
                    <Col xs={6} style={{display:"flex", flexDirection:"row-reverse"}}><Button style={{background:"rgb(236,94,113)",outline:"none"}}>Contact Today!</Button></Col>
                </Row>
                {/* <Row style={{textAlign:"center",padding:"3%",background:"grey"}}>
                    <Col>Home</Col>
                    <Col>About Us</Col>
                    <Col>Contact</Col>
                </Row> */}
            </Container>
        </div>

        </footer>
    
        </>

    );
}

export default Footer;