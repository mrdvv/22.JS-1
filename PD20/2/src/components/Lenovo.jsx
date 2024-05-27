import './ItemCard.css';
import Lenovoimg from '../assets/img/Lenovoimg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Lenovo() {
  return (
    <>
        <img src={Lenovoimg} alt="alt" />
        <p>LENOVO</p>
        <p>IdeaPad™ 3 15ADA05, AMD Ryzen™ 3 3250U</p>
            <Container>
                <Row>
                <Col><h2 className="text-success" style={{ fontSize: '1rem', fontWeight: 'bold',  }}>4.50 €/men</h2></Col>
                <Col><h3 style={{ fontSize: '1.2em', fontWeight: 'bold' }}>800.00€</h3></Col>
                </Row>
            </Container>
    </>
  )
}

export default Lenovo