import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
function NavScrollExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href='#'>
          <img
            src='https://upload.wikimedia.org/wikipedia/vi/thumb/3/37/Bitis_logo.svg/1280px-Bitis_logo.svg.png'
            alt=''
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href='#action1'> VỀ BITI'S</Nav.Link>
            <NavDropdown title='Nam' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action4'>Hunter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>Sandal</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Nữ' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action4'>Hunter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>Sandal</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Phụ kiện' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action4'>Túi Xách</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>Ví</NavDropdown.Item>
            </NavDropdown>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
            </Form>
            <Button onClick={handleShow}>
              <i className='fa-solid fa-bag-shopping'></i>{" "}
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
            <Link to='/login' className='btn btn-login btn-outline-secondary'>
              Đăng nhập
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
