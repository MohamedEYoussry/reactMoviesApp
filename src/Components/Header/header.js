import React, { useCallback, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import favReducer from "../../Store/reducer";
import { useSelector } from "react-redux";
import { langContext } from "../../Contexts/lang";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


function BasicExample() {
  const {lang} = useContext(langContext)

  const isFavourite = useSelector((state) => state.movies)
  const count = isFavourite.length
  return (<>
     <Navbar bg="light" expand="lg">
       <Container>
         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <NavLink to="/">Home</NavLink>
             <NavLink className="mx-5" to="/about">About Us</NavLink>
             <NavLink to="/contact">Contact US</NavLink>
             <NavLink className="mx-5" to="/produtcs">Products</NavLink>
             <NavLink to="/details">Details</NavLink>
             <NavLink className="mx-5" to="/favourite">Favourites</NavLink>
             <h1>
             favorite movies : {count}</h1>
             <h3> Languge :{lang}</h3>
            



           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    
    </>
  );
}

export default BasicExample;