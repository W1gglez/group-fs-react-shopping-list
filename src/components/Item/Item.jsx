import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function Item({ item, fetchInventory }) {
  function removeItem(id) {
    axios
      .delete(`/api/inventory/${id}`)
      .then(() => fetchInventory())
      .catch((err) => console.error(err));
  }

  function purchaseItem(id) {
    console.log(id);
    axios
      .put(`/api/inventory/purchase/${id}`)
      .then(() => fetchInventory())
      .catch((err) => console.error(err));
  }

  return (
    <Col>
      <Card
        className='text-center'
        style={{ width: '15rem' }}
      >
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Quantity: {item.quantity} {item.unit}
            <br />
            {item.purchased === true ? (
              <Button
                variant='outline-success'
                disabled
              >
                Added to Cart
              </Button>
            ) : (
              <Button
                variant='success'
                onClick={() => {
                  purchaseItem(item.id);
                }}
              >
                Purchase Item
              </Button>
            )}
            {
              <Button
                variant='danger'
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
