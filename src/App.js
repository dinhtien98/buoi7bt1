import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
import Register from "./pages/register/Register";
import Cats from "./components/cats/Cats";

function App() {
  return (
    <div>
      <BrowserRouter basename="/buoi7bt1"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
