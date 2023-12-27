import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import pln from '../../assets/pln.png';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header>
      <Navbar expand='lg' className='navStyle shadow-sm mb-3 rounded'>
        <Container fluid>
          <NavLink to='/' className='navbar navbar-brand'>
            <img src={pln} alt='LogoPln' width={'240px'}></img>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className="me-auto" defaultActiveKey="/">
              <Nav.Item className='mx-2'>
                <NavLink className='nav-link'to={"/"}>Home</NavLink>
              </Nav.Item>
              <Nav.Item className='mx-2'>
                <NavLink className={'nav-link'} to={"/aboutUs"}>About Us</NavLink>
              </Nav.Item>
              <Nav.Item className='mx-2'>
                <NavDropdown title="Contact" id="basic-nav-dropdown">
                  <NavDropdown.Item href="">Instagram</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Whatsapp</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">LinkedIn</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
            </Nav>
            <Form className='form-inline'>
              <NavLink to={'/auth/signup'} className="btn btn-outline-primary mr-2">Sign up</NavLink>
                <span className="text-muted"> | </span>
                <NavLink to={'/auth/login'} className="btn btn-outline-secondary mr-2">Log in</NavLink>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
    </header>
  );
}

export default Header;