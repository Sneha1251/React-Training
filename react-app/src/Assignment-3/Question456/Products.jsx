import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {items} from "./Items";
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
