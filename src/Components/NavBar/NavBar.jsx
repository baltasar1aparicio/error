import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import "./NavBar.css"



function NavBar() {
  return (
    <>
      <Navbar className='navbar-color'>
        <Container>
          <Navbar.Brand className='text-color' as={Link} to="/"> GeekStore </Navbar.Brand>
          <Nav className='navlinks-caracteristicas'>
            <Link className='text-color' to="/category/naruto">Naruto</Link>
            <Link className='text-color' to="/category/onepiece">One Piece</Link>
            <Link className='text-color' to="/category/jujutsukaisen">Jujutsu Kaisen</Link>
            <Link to="/cart"> <CartWidget /> </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;