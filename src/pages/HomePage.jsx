import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Bulk Vegetable/Fruit Ordering Platform</h1>
      <div>
        <Link to="/buyer">
          <button>Buyer Portal</button>
        </Link>
        <Link to="/admin">
          <button>Admin Portal</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
