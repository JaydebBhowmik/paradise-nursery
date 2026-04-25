import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice"; // Using the new name addItem
import { Link } from "react-router-dom";

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      { name: "Snake Plant", cost: "$15", image: "https://example.com" },
      { name: "Pothos", cost: "$10", image: "https://example.com" },
      { name: "Spider Plant", cost: "$12", image: "https://example.com" },
      { name: "Peace Lily", cost: "$18", image: "https://example.com" },
      { name: "Aloe Vera", cost: "$14", image: "https://example.com" },
      { name: "Fiddle Leaf Fig", cost: "$25", image: "https://example.com" }
    ]
  },
  {
    category: "Flowering Plants",
    plants: [
      { name: "Rose", cost: "$20", image: "https://example.com" },
      { name: "Jasmine", cost: "$15", image: "https://example.com" },
      { name: "Hibiscus", cost: "$18", image: "https://example.com" },
      { name: "Lavender", cost: "$12", image: "https://example.com" },
      { name: "Marigold", cost: "$8", image: "https://example.com" },
      { name: "Orchid", cost: "$30", image: "https://example.com" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  
  // Access cart items to check if a plant is already added
  const cart = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-grid">
      <nav className="navbar">
        <h1>Paradise Nursery</h1>
        <Link to="/cart">
          <div className="cart-icon">🛒 {cart.length}</div>
        </Link>
      </nav>

      {plantsArray.map((categoryGroup, index) => (
        <div key={index}>
          <h2 className="category-title">{categoryGroup.category}</h2>
          <div className="plant-list">
            {categoryGroup.plants.map((plant, plantIndex) => {
              // Check if plant is already in cart to disable button
              const isInCart = cart.some(item => item.name === plant.name);

              return (
                <div className="plant-card" key={plantIndex}>
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3>{plant.name}</h3>
                  <p>{plant.cost}</p>
                  <button 
                    className="add-to-cart-btn"
                    disabled={isInCart} 
                    onClick={() => handleAddToCart(plant)}
                  >
                    {isInCart ? "Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
