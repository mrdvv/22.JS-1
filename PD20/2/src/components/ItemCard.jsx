import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Macbook from './Macbook.jsx';
import Lenovo from './Lenovo.jsx';
import Surface from './Surface.jsx';
function ItemCard() {
  return (
    <Container className='ItemCardContainer'>

      <Row className='no-gutters'>
        <Col className='ItemContainer'><p style={{ fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid gray', }}>Palyginti</p><Macbook/></Col>
        <Col className='ItemContainer'><p style={{ fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid gray', }}>Palyginti</p><Lenovo/></Col>
        <Col className='ItemContainer'><p style={{ fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'left', borderBottom: '1px solid gray', }}>Palyginti</p><Surface/></Col>
      </Row>
    </Container>
  );
}

export default ItemCard;