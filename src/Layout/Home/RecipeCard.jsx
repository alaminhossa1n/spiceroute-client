import React from 'react';

const RecipeCard = ({ recipe }) => {

    const { ingredients, cookingMethod, rating, recipeName } = recipe
    console.log(recipe);
    return (
        <div className='border'>
            <div>
                <h2>{recipeName}</h2>
                <p>{cookingMethod}</p>
                <p>{rating}</p>
            </div>

            {
                ingredients.map(n=> <li>{n}</li>)
            }
        </div>
    );
};

export default RecipeCard;