import React from 'react';

const OneOrder = ({id, name, ingredients}) => {
     return (
        <div className="each-order=">
            <h2 id={name} className="name"> Customer Name: {name}</h2>
            <p id="ingredientNames" className="ingredients">Ingredients: {ingredients}</p>
        </div>

    )

}

export default OneOrder;