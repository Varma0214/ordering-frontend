import React from "react";
import ProductCatalog from "../components/ProductCatalog";
import OrderForm from "../components/OrderForm";
import OrderTracking from "../components/OrderTracking";

function BuyerPage() {
  return (
    <div>
      <h2>Buyer Portal</h2>
      <ProductCatalog />
      <OrderForm />
      <OrderTracking />
    </div>
  );
}

export default BuyerPage;
