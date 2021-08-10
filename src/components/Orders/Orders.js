import React from 'react';
import './Orders.css';
import OneOrder from '../OneOrder/OneOrder';

const Orders = (orders) => {
  console.log("orders!", orders.orders)
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
    <section>
      {/* <h1>Hello</h1> */}
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;


// return (
//   <OneOrder
//       <div className="order">
//         <h3>{order.name}</h3>
//         <ul className="ingredient-list">
//           {order.ingredients.map(ingredient => {
//             return <li>{ingredient}</li>
//           })}
//         </ul>
//       </div>
//   />
// //   )
// // });