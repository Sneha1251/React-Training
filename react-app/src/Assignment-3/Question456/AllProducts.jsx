import React from "react";
import { items } from "./Items";

const AllProducts = () => {
  return (
    <div>
      <h2>List of Products</h2>
      {items.map((product) => (
        <div key={product.id}>
          <h3>
            {product.name}-{product.price}
          </h3>
        </div>
      ))}
    </div>
  );
};
export default AllProducts;
