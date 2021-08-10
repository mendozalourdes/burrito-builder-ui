import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    // console.log("propsOrderForm", props.addBurritoOrder)
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }


  handleNameChange = e => {
    this.setState({[e.target.name]: e.target.value})
}

handleIngredientChange = e => {
  e.preventDefault()
  this.setState({ingredients: [...this.state.ingredients, e.target.name]})
}

handleSubmit = e => {
  e.preventDefault();
  const newBurrito = {
      id: Date.now(),
      ...this.state
  }
this.clearInputs();
// this.props.addBurritoOrder(newBurrito);
if(this.state.name && this.state.ingredients.length) {
  this.props.addBurritoOrder(newBurrito);
  this.clearInputs();

} else {
  this.clearInputs();
  return null

}
}


  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button className="ingredientsBtns" id="ingredientsBtns" key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button className="submit-btn" id="submitBtn" onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
