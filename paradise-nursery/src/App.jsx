import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import './App.css'

function Home() {
  return (
    <div className="background-image">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>Bring Nature Home</p>

        <Link to="/products">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}



function App() {

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  )
}

export default App
