import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../assets/Header/scalecredologo.png";
// import MetaImage from "../../assets/services/meta.png";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar navbar-expand-lg navbar-light ${isSticky ? 'navStyle' : 'navDefault'}`}
      sticky="top"
    >
      <Container>
         <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn">
          {/* <FontAwesomeIcon icon={faBuffer} className="brnIcon" /> Scale  */}
        <img 
    src={logo} 
    alt="Scale Credo Logo" 
    className="logo-img" 
    />
    <span className="navHighlight">Scale Credo</span>
    </Navbar.Brand> 

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto mainNav">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="nav-link" onClick={scrollTop}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#services" className="nav-link">
                Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#reviews" className="nav-link">
                Reviews
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contactUs" className="nav-link">
                Contact Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                            
                                    <>
                                        <button className="loginBtn">Get a Quote</button>
                                    </>
                            
                        </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
