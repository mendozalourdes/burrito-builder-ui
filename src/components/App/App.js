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
        console.log("errrorResponse", response)
        this.setState({error: response})
      } else {
        console.log("workingResponse", response.orders)
        this.setState({orders: response.orders})
      }
    })
    .catch(err => err.message)
}

  render() {
    console.log("gimme", this.state.orders)
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>

        {this.state.orders && !this.state.error && <Orders orders={this.state.orders}/>}
      </main>
    );
  }
}


export default App;
