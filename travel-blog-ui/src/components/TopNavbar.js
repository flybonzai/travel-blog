import '../style/TopNavbar.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar className={'top-navbar'} expand={'lg'}>
      <Navbar.Toggle aria-controls='top-navbar' />
      <Navbar.Collapse id='top-navbar'>
        <Nav className='d-flex justify-content-end'>
          <Nav.Link  href='/home' className={'top-navbar-text text-white'}>Home</Nav.Link>
          <NavDropdown title='Destinations' id='destinations' className={'top-navbar-text text-white'}>
            <NavDropdown.Item href='#action/3.1'>China 2015</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.2'>Italy 2017</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.2'>Mayan Riviera 2018</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.3'>Portugal 2019</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.3'>Australia 2019</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Bryce 2020</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Grand Canyon 2020</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link  href='/shop' className={'top-navbar-text text-white'}>Shop</Nav.Link>
          <Nav.Link  href='/resources' className={'top-navbar-text text-white'}>Resources</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;