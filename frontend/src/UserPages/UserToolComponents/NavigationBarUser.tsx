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
              isPending ? "pending" : isActive ? "active" : "navbarLinks"}>İzin İsteği Oluştur</NavLink>
            <NavLink to="/user/view-profile" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Profili Görüntüle</NavLink>
            <NavLink to="/user/view-off" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navbarLinks"}>İzinli Günleri Görüntüle</NavLink>
            <Nav className='logoutBtn'>
              <NavLink to="/logout" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Çıkış Yap</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default NavigationBarUser