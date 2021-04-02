import '../style/TopNavbar.css'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar bg={'dark'} variant={'dark'} expand={'lg'}>
      <Navbar.Toggle aria-controls='top-navbar' />
      <Navbar.Collapse id='top-navbar'>
        <Nav className='mr-auto'>
          <Nav.Link  href='/home' className={'top-navbar-text'}>Home</Nav.Link>
          <NavDropdown title='Destinations' id='photos-dropdown' className={'top-navbar-text'}>
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
          <Nav.Link  href='/shop' className={'top-navbar-text'}>Shop</Nav.Link>
          <Nav.Link  href='/resources' className={'top-navbar-text'}>Resources</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;