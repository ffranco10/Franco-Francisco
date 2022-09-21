import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';


const NavBar = () => {
    return(
        <Navbar bg="blue" variant="dark">
            <Container>
            <Navbar.brand href="#Home">
                Toys NERD
                </Navbar.brand>
                    <Nav className="me-auto">
                        <Nav.link href="#home">Home</Nav.link>
                        <Nav.link href="#catergorias">Categorias</Nav.link>
                        <Nav.link href="#pre-orders">Pre-orders</Nav.link>
                        <Nav.link href="#nosotros">Nosotros</Nav.link>
                    </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;