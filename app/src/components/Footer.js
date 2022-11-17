import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; 3Gear
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
