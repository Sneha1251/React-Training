import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const items = [
  { id: 1, name: "Laptop ", price: 70000 },
  { id: 2, name: "Mobile", price: 60000 },
  { id: 3, name: "HeadPhones", price: 5000 },
  { id: 4, name: "EarPods", price: 2000 },
  { id: 5, name: "Charger", price: 1000 },
  // Add more items as needed
];

const Products = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <ol>
        <li>
          <h3>
            {items[id - 1].name} - {items[id - 1].price}
          </h3>
        </li>
      </ol>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        GO Back
      </button>
    </div>
  );
};

export default Products;
export { items };
