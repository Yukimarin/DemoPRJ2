import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample(props) {
  console.log("Card", props);
  // Destructuring
  const { key, item } = props;
  return (
    <Card key={key} style={{ width: "18rem" }}>
      <Card.Img variant='top' src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
        <Button variant='primary'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
