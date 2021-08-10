import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [

      ], 
      error: ""
    }
  }

  componentDidMount() {
    getOrders()
    .then(response => {
      if(typeof response === 'string') {
        // console.log("errrorResponse", response)
        this.setState({error: response})
      } else {
        // console.log("workingResponse", response.orders)
        this.setState({orders: response.orders})
      }
    })
    .catch(err => err.message)
}


addBurritoOrder = (newBurrito) => {
    const updatedBurritoOrders = [...this.state.orders, newBurrito]
    return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify(newBurrito),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(() => {
      this.setState({ orders: updatedBurritoOrders })
    })
  }


  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          {this.state.orders && <OrderForm props={this.state} addBurritoOrder={this.addBurritoOrder}/>}
        </header>

        {this.state.orders && !this.state.error && <Orders orders={this.state.orders}/>}
      </main>
    );
  }
}


export default App;
