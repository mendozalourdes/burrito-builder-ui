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
        console.log("workingResponse", response)
        this.setState({orders: response})
      }
    })
    .catch(err => err.message)
}

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
