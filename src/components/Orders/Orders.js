import React from 'react';
import './Orders.css';
import OneOrder from '../OneOrder/OneOrder';

const Orders = (orders) => {
  const orderEls = orders.orders.map(order => {
    return (
      <OneOrder
        id={order.id}
        key={order.id}
        name={order.name}
        ingredients={order.ingredients}
      />
    )
  });

  return (
    <section className="all-orders">
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;

 