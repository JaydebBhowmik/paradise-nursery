import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Snake Plant", price: 20, category: "Indoor" },
  { id: 2, name: "Peace Lily", price: 25, category: "Indoor" },
  { id: 3, name: "Aloe Vera", price: 15, category: "Medicinal" },
  { id: 4, name: "Tulsi", price: 10, category: "Medicinal" },
  { id: 5, name: "Rose", price: 18, category: "Flowering" },
  { id: 6, name: "Jasmine", price: 22, category: "Flowering" },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    alert(`${plant.name} added to cart`);
  };

  return (
    <div>
      <h1>Our Plants</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>

          <button onClick={() => handleAddToCart(plant)}>
            Add to Cart
          </button>
        </div>
      ))}

      <br />

      <Link to="/cart">
        <button>Go To Cart</button>
      </Link>
    </div>
  );
}

export default ProductList;