import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Chef = () => {
    const selectedChef = useLoaderData();
    const { chefName, chefPicture, description, likes, numberOfRecipes, yearsOfExperience, recipes } = selectedChef

    console.log(selectedChef);


    return (
        <div className='container'>
            <div className='md: flex w-full mx-auto gap-96'>
                <div>
                    <img className='' src={chefPicture} alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>{chefName}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div>
                {
                    recipes.map(recipe=> <RecipeCard
                    recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Chef;