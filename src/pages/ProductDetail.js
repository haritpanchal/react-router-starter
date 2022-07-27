import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  // console.log();
  return (
    <section>
      <h2>ProductDetail</h2>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
