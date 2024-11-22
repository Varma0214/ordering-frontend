import React, { useState } from "react";
import axios from "axios";

function OrderForm() {
  const [order, setOrder] = useState({
    buyer_name: "",
    contact: "",
    address: "",
    items: [{ product: "", quantity: 1 }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/orders", order)
      .then(response => alert("Order placed successfully!"))
      .catch(error => console.error(error));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...order.items];
    updatedItems[index][field] = value;
    setOrder({ ...order, items: updatedItems });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Place an Order</h3>
      <input
        type="text"
        placeholder="Name"
        value={order.buyer_name}
        onChange={(e) => setOrder({ ...order, buyer_name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Contact"
        value={order.contact}
        onChange={(e) => setOrder({ ...order, contact: e.target.value })}
        required
      />
      <textarea
        placeholder="Address"
        value={order.address}
        onChange={(e) => setOrder({ ...order, address: e.target.value })}
        required
      />
      {order.items.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Product Name"
            value={item.product}
            onChange={(e) =>
              handleItemChange(index, "product", e.target.value)
            }
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) =>
              handleItemChange(index, "quantity", e.target.value)
            }
            required
          />
        </div>
      ))}
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default OrderForm;
