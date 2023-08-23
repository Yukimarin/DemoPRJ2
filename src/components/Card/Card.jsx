import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function BasicExample(props) {
  console.log("Card", props);
  // Destructuring
  const { key, item, cart, setCart } = props;
  console.log(cart);
  const handleBuy = (e, i) => {
    console.log(i);
    let findItem = cart.find((item) => item.productId === i);

    if (!findItem) {
      axios
        .post("http://localhost:8000/carts", {
          userId: JSON.parse(localStorage.getItem("isLoginId")),
          productId: i,
          productName: e.name,
          productPrice: e.price,
          productImg: e.img,
          amount: 1,
        })
        .then((res) => {
          console.log(res);
          // Update the cart state after successful addition
          setCart([...cart, res.data]); // Assuming the response data contains the added item
        })
        .catch((err) => console.log(err));
    } else {
      const updatedAmount = findItem.amount + 1;
      axios
        .patch(`http://localhost:8000/carts/${findItem.id}`, {
          amount: updatedAmount,
        })
        .then((res) => {
          console.log(res);
          // Update the cart state after successful update
          const updatedCart = cart.map((item) =>
            item.productId === i ? { ...item, amount: updatedAmount } : item
          );
          setCart(updatedCart);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Card key={key} style={{ width: "18rem" }}>
      <Link to={`/product/${item.id}`}>
        <Card.Img variant='top' src={item.img} />
      </Link>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
        <Button variant='primary' onClick={() => handleBuy(item, item.id)}>
          Mua ngay
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
