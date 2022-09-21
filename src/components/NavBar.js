import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';


const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#Home">
                Toys NERD
                </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#catergorias">Categorias</Nav.Link>
                        <Nav.Link href="#pre-orders">Pre-orders</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;