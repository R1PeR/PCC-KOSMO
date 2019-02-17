import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap'
import mailIcon from './mail.svg';
import phoneIcon from './phone.svg';
import pinIcon from './pin.svg';
class Footer extends Component{
    render(){
        return(
            <footer>
                <Row className="justify-content-center footer">
                        <Col xs="12" sm="5" md="4" className="">
                            <Col xs="12" className="footer-column">
                                <img src={mailIcon} alt="mail icon" width="32" height="32"/>
                                <span className="inline-block">Example@gmail.com</span>
                            </Col>
                            <Col xs="12" className="footer-column">
                                <img src={phoneIcon} alt="phone icon" width="32" height="32"/>
                                <span className="inline-block">+48 100 200 300</span>
                            </Col>
                            <Col xs="12" className="footer-column">
                                <img src={pinIcon} alt="pin icon" width="32" height="32"/>
                                <span className="inline-block">City, street 12</span>
                            </Col>
                        </Col>
                        <Col xs="12" sm="5" md="4" className="">
                            <p className="varela z-index-10 relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="varela z-index-10 relative">Lorem ipsum dolor sit amet.</p>
                            <p className="varela z-index-10 relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="varela z-index-10 relative">Lorem ipsum dolor sit amet.</p>
                        </Col>
                    </Row>
            </footer>
        )
    }
}
export default Footer;