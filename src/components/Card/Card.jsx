import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
function BasicExample(props) {
  console.log("Card", props);
  // Destructuring
  const { key, item } = props;
  const { productId } = useParams();
  return (
    <Card key={key} style={{ width: "18rem" }}>
      <Link to={`/product/${item.id}`}>
        <Card.Img variant='top' src={item.img} />
      </Link>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
        <Button variant='primary'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
