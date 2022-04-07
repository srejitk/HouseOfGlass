import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "Contexts/Product/ProductContext";
import { AuthProvider } from "Contexts/Auth/AuthContext";
import { CartProvider } from "Contexts/Cart/CartContext";
import { WishlistProvider } from "Contexts/Wishlist/WishlistContext";
import { CategoryProvider } from "Contexts/Category/CategoryContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CategoryProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </CategoryProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
