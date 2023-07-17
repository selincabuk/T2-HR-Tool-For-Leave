import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="fullWidthNav" data-bs-theme="dark" style={{marginRight: "0px !important"}}>
      <Container className='holdLinks' style={{marginRight: "0"}}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: "0px !important"}} />
        <Navbar.Collapse id="responsive-navbar-nav" style={{marginRight: "0px !important"}}>
        <NavLink to="/admin/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "navbarLinks"}>İstekler</NavLink>
          <NavLink to="/admin/users" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Kullanıcılar</NavLink>
          <NavLink to="/admin/register-user" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Yeni Kullanıcı Kayıt</NavLink>
          <NavLink to="/admin/view-off" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "navbarLinks"}>İzin Takvimi</NavLink>
          <div className='logoutBtn' style={{marginRight: "0px"}} >
            <NavLink to="/admin/logout" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navbarLinks"}>Çıkış Yap</NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
