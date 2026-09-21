import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of products in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cost of all products
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Checkout placeholder
  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          Paradise Nursery
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </nav>

      {/* Shopping Cart */}
      <main className="cart-page">

        <h1>
          Shopping Cart
        </h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div>
            <p>
              Your shopping cart is empty.
            </p>

            <br />

            <Link
              to="/plants"
              className="continue-button"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            {cartItems.map((item) => {

              const itemTotal =
                item.price * item.quantity;

              return (
                <div
                  className="cart-item"
                  key={item.id}
                >

                  {/* Plant Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  {/* Plant Details */}
                  <div className="cart-item-details">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      Unit Price: R
                      {item.price.toFixed(2)}
                    </p>

                    <p>
                      Total: R
                      {itemTotal.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="quantity-controls">

                      <button
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(item.id)
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          dispatch(
                            increaseQuantity(item.id)
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Delete Button */}
                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    Delete
                  </button>

                </div>
              );
            })}

            {/* Cart Summary */}
            <div className="cart-summary">

              <p className="cart-total">
                Total: R
                {totalAmount.toFixed(2)}
              </p>

              {/* Checkout */}
              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link
                to="/plants"
                className="continue-button"
              >
                Continue Shopping
              </Link>

            </div>
          </>
        )}

      </main>
    </>
  );
}

export default CartItem;
