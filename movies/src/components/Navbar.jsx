import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
    return (
        <Navbar
            key="lg"
            expand="lg"
            bg="dark"
            data-bs-theme="dark"
            className="bg-body-tertiary"
        >
            <Container>
                <NavLink to="/" className="text-decoration-none">
                    <Navbar.Brand>Hackflix</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-sm`}
                    bg="dark"
                    data-bs-theme="dark"
                    aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                            Hackflix
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                            <Form
                                className="mx-auto text-decoration-none"
                                as={NavLink}
                                to="/search"
                            >
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </Form>
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/about-us"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                About Us
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;
