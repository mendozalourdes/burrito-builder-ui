import React from 'react';
import './OneOrder.css'

const OneOrder = ({id, name, ingredients}) => {
     return (
        <section className="one-order">
            <div className="each-order=">
                <h2 id={name} className="name"> Customer Name: {name}</h2>
                <p id="ingredientNames" className="ingredients">Ingredients: {ingredients.join(', ')}</p>
            </div>

        </section>

    )

}

export default OneOrder;

// this.state.ingredients.join(', ')