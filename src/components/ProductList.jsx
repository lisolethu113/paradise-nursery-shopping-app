import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  // INDOOR PLANTS
  {
    id: 1,
    category: "Indoor Plants",
    name: "Monstera Deliciosa",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "Indoor Plants",
    name: "Snake Plant",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2f1c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "Indoor Plants",
    name: "Peace Lily",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    category: "Indoor Plants",
    name: "ZZ Plant",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    category: "Indoor Plants",
    name: "Rubber Plant",
    price: 319,
    image:
      "https://images.unsplash.com/photo-1601986597483-4f9a0f3f9f00?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    category: "Indoor Plants",
    name: "Boston Fern",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
  },

  // SUCCULENTS
  {
    id: 7,
    category: "Succulents",
    name: "Aloe Vera",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    category: "Succulents",
    name: "Echeveria",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    category: "Succulents",
    name: "Haworthia",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    category: "Succulents",
    name: "Jade Plant",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    category: "Succulents",
    name: "String of Pearls",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    category: "Succulents",
    name: "Zebra Haworthia",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },

  // FLOWERING PLANTS
  {
    id: 13,
    category: "Flowering Plants",
    name: "Orchid",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    category: "Flowering Plants",
    name: "African Violet",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    category: "Flowering Plants",
    name: "Anthurium",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    category: "Flowering Plants",
    name: "Begonia",
    price: 219,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    category: "Flowering Plants",
    name: "Geranium",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    category: "Flowering Plants",
    name: "Kalanchoe",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
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

      {/* Product Listing */}
      <main className="products-page">

        <h1 className="products-title">
          Our Plants
        </h1>

        {categories.map((category) => {

          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              className="category-section"
              key={category}
            >

              <h2 className="category-title">
                {category}
              </h2>

              <div className="product-grid">

                {categoryPlants.map((plant) => {

                  const isInCart = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div
                      className="product-card"
                      key={plant.id}
                    >

                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <div className="product-info">

                        <h3>
                          {plant.name}
                        </h3>

                        <p className="product-price">
                          R{plant.price.toFixed(2)}
                        </p>

                        <button
                          className="add-button"
                          onClick={() =>
                            handleAddToCart(plant)
                          }
                          disabled={isInCart}
                        >
                          {isInCart
                            ? "Added to Cart"
                            : "Add to Cart"}
                        </button>

                      </div>

                    </div>
                  );
                })}

              </div>

            </section>
          );
        })}

      </main>
    </>
  );
}

export default ProductList;
