import React from 'react';

const OneOrder = ({id, name, ingredients}) => {
     return (
        <div className="each-order=">
            <h2 id={id} className="name"> Customer Name: {name}</h2>
            <p className="ingredients">Ingredients: {ingredients}</p>
        </div>

    )

}

export default OneOrder;