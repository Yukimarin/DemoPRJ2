import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";
import axios from "axios";
import "./Homepage.css";
function Homepage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // Lấy dữ liệu product
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // Lấy dữ liệu cart
  useEffect(() => {
    axios
      .get("http://localhost:8000/carts")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Carousel></Carousel>
      <h1> Các sản phẩm bán chạy</h1>
      <div className='container'>
        <br />
        <div className='list-item'>
          {products.map((e, i) => (
            <Card key={i} item={e} cart={cart} setCart={setCart}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
