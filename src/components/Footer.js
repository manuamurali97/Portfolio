import { Container, Row, Col } from "react-bootstrap";
//import logo from '../assets/img/logo.svg';
import logo from '../assets/img/M-logo.png';

export const Footer = () => 
{

    return(
        <footer className="footer">
            <Container>
                <Row className = "align-item-center">
                    <Col sm={6}>
                    <img src= {logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <p>&copy; 2026 Manua Murali · Built with React</p>
                    </Col>
                </Row>

            </Container>

        </footer>
    )
}