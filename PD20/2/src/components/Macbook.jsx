import './ItemCard.css';
import Macbookimg from '../assets/img/Macbookimg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Macbook() {
  return (
    <>
        <img src={Macbookimg} alt="alt" />
        <p>Apple</p>
        <p>13.3&quot; MacBook Pro with Touch Bar</p>
            <Container>
                <Row>
                <Col><h2 className="text-success" style={{ fontSize: '1rem', fontWeight: 'bold',  }}>10.50 €/men</h2></Col>
                <Col><h3 style={{ fontSize: '1.2em', fontWeight: 'bold' }}>2000.00€</h3></Col>
                </Row>
            </Container>
    </>
  )
}

export default Macbook