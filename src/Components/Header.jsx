import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src\assets\sunway_logo_white.png"
              width="149*1.5"
              height="55.5"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-end">
            <Nav.Link className='navlinks' href="#home">Home</Nav.Link>
            <Nav.Link className='navlinks' href="#features">Features</Nav.Link>
            <Nav.Link className='navlinks' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header