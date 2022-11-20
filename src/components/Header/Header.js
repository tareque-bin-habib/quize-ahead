import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <Navbar bg="light" expand="lg" className='p-3'>
            <Container>
                <Navbar.Brand className='logo fs-4' href="#home"><h3>Quize Ahead</h3></Navbar.Brand>
                <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-2 mb-lg-0 me-1 header">
                        <Link to='/'>Home</Link>
                        <Link to='/topics'>Topics</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/blog'>Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;