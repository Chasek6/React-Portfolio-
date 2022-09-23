import React from 'react';
import { Nav, Navbar, Container, Tab, Tabs,NavDropdown, NavbarBrand} from 'react-bootstrap';
import { Box, Flex, Stack, Grid, Wrap, AspectRatio } from "@chakra-ui/layout"







// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Container> 
      <Navbar expand="xxl" bg="light" >
        {/* <NavbarBrand scr {Images/CS.png}> */}
      <Container>
        <Navbar.Brand onClick={() => handlePageChange('Home')}>Chase|Stratton</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handlePageChange('Home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('About')}>About</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
            {/* Below will be a dropdown tab that will include a link to my resume  */}
            <NavDropdown title="Resume" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1cdaUHYWsWlh4mUeQHWOUzP7iAM4CHbVr">Download Resume</NavDropdown.Item>
              <NavDropdown.Item href="https://chasek6.github.io/ChasingBoltz/"> Online Resume </NavDropdown.Item>
              <NavDropdown.Item href="https://music.apple.com/us/playlist/foreign-language/pl.u-oZylKe9tRYGZeMZ">Listen to my Playlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          CHASE | Stratton
        </Navbar.Collapse>
      </Container>
      {/* </NavbarBrand> */}
    </Navbar>

    <Tabs fill className="mt-5">
      <Tab className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

        >
          Home
        </a>
      </Tab>
      <Tab className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, 
          // and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </Tab>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so 
          // we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, 
          // and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </Tabs>
    </Container>
  );
}

export default NavTabs;
