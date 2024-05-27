import './ItemCard.css';
import Surfaceimg from '../assets/img/Surfaceimg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Surface() {
  return (
    <>
        <img src={Surfaceimg} alt="alt" />
        <p>Microsoft</p>
        <p>13.5&quot; Surface Book Multi-Touch 2-in-1 Laptop</p>
            <Container>
                <Row>
                <Col><h2 className="text-success" style={{ fontSize: '1rem', fontWeight: 'bold',  }}>8.50 €/men</h2></Col>
                <Col><h3 style={{ fontSize: '1.2em', fontWeight: 'bold' }}>1500.00€</h3></Col>
                </Row>
            </Container>
    </>
  )
}

export default Surface