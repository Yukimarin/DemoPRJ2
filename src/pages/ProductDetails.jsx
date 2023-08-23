import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const param = useParams();
  console.log(param); //productId:2
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(product);
  let findProduct = product.find((e) => e.id === Number(param.productId));
  console.log(findProduct);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <div className='container'>
        <div className='product-img'>
          <img src='' alt='' />
        </div>
        <div className='product-content'>
          <h5></h5>
          <h5></h5>
          <div className='change-count'>
            <button className='minus'>-</button>
            <span className='count'>0</span>
            <button className='add'>+</button>
          </div>
          <div className='total'>10000</div>
          <button className='check-out'>Thanh toán</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
