import React,{Component} from 'react';
//import {NavLink} from 'react-router-dom'
import {Navbar,NavDropdown, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom' 
class Header extends Component{
    render(){
        return(
            <Navbar bg="white" expand="lg" sticky="top" className="navbar-sticky-top">
                <Navbar.Brand href="/" >
                    <img src="pcc-logo-normal.png" alt="PGG Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="h-100">
                    <Nav className="ml-auto h-100">
                        <Nav.Link>
                            <NavLink className="mavLink" to={this} activeClassName="activeLink">Home</NavLink>
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header;