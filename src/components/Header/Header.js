import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './header.css';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div>
            <div>
            <Navbar sticky="top"   expand="lg" className="nav-background" >
  <Container fluid>
    <Navbar.Brand  className="text-warning fs-4">Mediyot</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
         <div className="navbar">
           <a href=""> <Link  className="text-light " to="/home"> Home</Link></a>
          <a href=""><Link  className="text-light" to="/doctors">Doctor</Link></a>

          <a href=""><Link  className="text-light" to="/facilities">Facilities&Premises</Link></a>
          <a href=""><Link  className="text-light" to="/register">Register</Link></a>
          <a href=""><Link  className="text-light" to="/contact">Ask Us</Link></a>
         {
           !user.email &&  <a href=""><Link  className="text-light" to="/login">Login</Link></a>
         }
    
         </div>
        
        
       
      </Nav>
      
        {
          user.email && <span className="text-light me-4">welcome {user.email}</span>
        }
        {
          user.email && <Button onClick={logOut} className='btn btn-danger' variant="outline-success">Logout</Button>
        }
     
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        </div>
    );
};

export default Header;