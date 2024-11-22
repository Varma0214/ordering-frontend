import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/orders")
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  const updateStatus = (id, status) => {
    axios.put(`http://localhost:5000/api/admin/orders/${id}/status`, { status })
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === id ? { ...order, status } : order
          )
        );
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h3>Admin Dashboard</h3>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>Buyer: {order.buyer_name}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => updateStatus(order._id, "In Progress")}>
              Mark In Progress
            </button>
            <button onClick={() => updateStatus(order._id, "Delivered")}>
              Mark Delivered
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
