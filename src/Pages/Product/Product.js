import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div>
      <h1>This is the product page</h1>
    </div>
  );
};

export default Product;
