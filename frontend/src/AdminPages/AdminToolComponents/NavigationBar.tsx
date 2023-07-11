import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink to="/admin/users" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "navbarLinks"}>List Users</NavLink>
          <NavLink to="/admin/register-user" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Register User</NavLink>
          <NavLink to="/admin/view-off" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "navbarLinks"}>View Days Off</NavLink>
          <Nav className='logoutBtn'>
            <NavLink to="/admin/logout" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Log out</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
