import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink, NavItem } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Appheader = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [displayuserrole, displayuserroleupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        let role = sessionStorage.getItem('userrole');
        if (role === '' || role === null) {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            displayusernameupdate(username);
            displayuserroleupdate(role);
        }

    }, [location])
    return (

        <div>
            <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
                <Container>
                    <Navbar.Brand href="/">Rentals</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-toggle" />
                    <Navbar.Collapse id="navbar-toggle">
                        <Nav className="me-auto">
                            <Nav.Link href="/apartments">Apartments</Nav.Link>
                        </Nav>
                            {showmenu ?
                                <Nav>
                                    <Nav.Link href="/login">Logout</Nav.Link>
                                    <Nav.Link href="#">Hello {displayusername} ({displayuserrole})</Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </Nav>
                            }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Appheader;