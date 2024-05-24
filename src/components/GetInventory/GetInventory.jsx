import Item from '../Item/Item';
import ResetButton from '../ResetButton/ResetButton';
import { Container, Row } from 'react-bootstrap';

export default function GetInventory({ invList, fetchInventory }) {
  console.log(invList);
  return (
    <Container>
      <Row>
        {invList.map((item) => (
          <Item
            key={item.id}
            item={item}
            fetchInventory={fetchInventory}
          />
        ))}
      </Row>

      <ResetButton
        invList={invList}
        fetchInventory={fetchInventory}
      />
    </Container>
  );
}
