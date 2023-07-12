import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './NavigationBarUser.css';

function NavigationBarUser() {
    return (
      <Navbar collapseOnSelect expand="lg" className="fullWidthNav" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavLink to="/user/add-off-days" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Add Day Off</NavLink>
            <NavLink to="/user/view-profile" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navbarLinks"}>View Profile</NavLink>
            <NavLink to="/user/view-off" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navbarLinks"}>View Days Off</NavLink>
            <Nav className='logoutBtn'>
              <NavLink to="/logout" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Log out</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default NavigationBarUser