import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Chef = () => {
    const selectedChef = useLoaderData();
    const { chefName, chefPicture, description, likes, numberOfRecipes, yearsOfExperience, recipes, rating } = selectedChef

    console.log(selectedChef);


    return (
        <div className='container my-28'>
            <div className='md:flex w-3/4 mx-auto gap-10 mb-20 items-center'>
                <div>
                    <img className='w-full' src={chefPicture} alt="" />
                </div>
                <div className='border border-yellow-500 p-10'>
                    <h2 className='text-3xl font-bold'>{chefName}</h2>
                    <div>
                        <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            orientation="horizontal"
                            value={4.52}
                        />
                    </div>
                    <p>{description}</p>
                </div>
            </div>

            <div>
                {
                    recipes.map(recipe => <RecipeCard
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Chef;