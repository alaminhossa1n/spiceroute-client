import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecipeCard = ({ recipe }) => {

    const { ingredients, cookingMethod, rating, recipeName } = recipe
    console.log(recipe);
    return (
        <div className='shadow-xl p-6 rounded'>
            <div className=''>
                <h2 className='text-3xl font-semibold'>{recipeName}</h2>
                <div className='flex gap-1 items-center mt-2'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        readOnly
                        orientation="horizontal"
                        value={4.52}
                    />
                    <p>{rating}</p>
                </div>
                <p className='mt-6'><strong>Cooking Method:</strong> {cookingMethod}</p>
            </div>

            <div className='mt-6'>
                <strong className='text-lg'>Ingredients:</strong>
                {
                    ingredients.map(n => <li>{n}</li>)
                }
            </div>
        </div>
    );
};

export default RecipeCard;