import React, { useState } from "react";
import axios from "axios";

function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);

  const handleTrackOrder = () => {
    axios.get(`http://localhost:5000/api/orders/${orderId}`)
      .then(response => setOrder(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h3>Track Your Order</h3>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleTrackOrder}>Track Order</button>
      {order && (
        <div>
          <p>Status: {order.status}</p>
          <p>Buyer: {order.buyer_name}</p>
          <p>Address: {order.address}</p>
        </div>
      )}
    </div>
  );
}

export default OrderTracking;
