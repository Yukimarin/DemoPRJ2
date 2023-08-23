import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";
import axios from "axios";
import "./Homepage.css";
function Homepage() {
  const [products, setProducts] = useState([]);
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
  return (
    <div>
      <Carousel></Carousel>
      <div className='container'>
        <br />
        <h1> Các sản phẩm bán chạy</h1>
        <div className='list-item'>
          {products.map((e, i) => (
            <Card key={i} item={e}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
