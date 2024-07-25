import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ItemListContainer } from './ItemListContainer'
import { CartWidget } from './CartWidget'
export const NavBar = ()=>{
    return(
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Productos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Verduras</Nav.Link>
                        <Nav.Link href="#link">Libros</Nav.Link>
                        <Nav.Link href="#link">Juguetes</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
            
        </Navbar>
        <ItemListContainer/>
    </>

        
        
         
    )
}