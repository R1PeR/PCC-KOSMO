import React,{Component, Fragment} from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import BackgroundImageDiv from '../custom/BackgroundImageDiv';
//import BlackDiv from '../custom/BlackDiv';
import home from './pexels-photo-1366942.jpeg';
import download from './chemicalcheck_laborbild-3.jpg';

//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import {Carousel} from 'react-responsive-carousel'
//import BackgroundImageDiv from '../custom/BackgroundImageDiv'
class Home extends Component{
    render(){
        return(
            <Fragment>
                <BackgroundImageDiv url={home}>
                    <Row className="justify-content-center home">
                        <Col xs="12" sm="8" md="7" className="align-center">
                            <h3 className="nunito z-index-10 relative">PCC Customer Products</h3>
                            <hr className="z-index-10 relative"/>
                            <p className="varela z-index-10 relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="varela z-index-10 relative">Lorem ipsum dolor sit amet.</p>
                        </Col>
                    </Row>
                </BackgroundImageDiv>
                <Container fluid={true} className="container">
                <Row className="justify-content-center about">
                    <Col xs="8" className="align-center">
                        <p className="varela">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="varela">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="varela">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                </Row>
                </Container>
                <BackgroundImageDiv url={download}>
                    <Row className="justify-content-center download">
                        <Col xs="12" sm="8" md="7" className="align-center">
                            <h3 className="nunito z-index-10 relative">Our Products</h3>
                            <p className="varela z-index-10 relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button className="z-index-10 relative button">Lorem ipsum dolor sit amet.</Button>
                        </Col>
                    </Row>
                </BackgroundImageDiv>
            </Fragment>
        )
    }
}
export default Home;