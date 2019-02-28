import React, { Component } from 'react';
import { Navbar, Container} from 'react-bootstrap';

 
class Header extends Component {
  render() {
    return (
        <Container>
  <Navbar expand="lg" variant="dark" bg="dark">
    <Navbar.Brand href="#">Apollo</Navbar.Brand>
  </Navbar>
</Container>
 
    );
  }
}
export default Header