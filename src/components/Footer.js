import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
//import logo from '../assets/img/logo.svg';
import logo from '../assets/img/M-logo.png';

export const Footer = () => 
{
    const { translations } = useLanguage();

    return(
        <footer className="footer">
            <Container>
                <Row className = "align-item-center">
                    <Col sm={6}>
                    <img src= {logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <p>{translations.footer.text}</p>
                    </Col>
                </Row>

            </Container>

        </footer>
    )
}