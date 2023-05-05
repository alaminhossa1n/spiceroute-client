import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaPizzaSlice, FaThumbsUp, FaUtensils } from "react-icons/fa";


const Chef = () => {
    const selectedChef = useLoaderData();
    const { chefName, chefPicture, description, likes, numberOfRecipes, yearsOfExperience, recipes, rating } = selectedChef
    
    return (
        <div className='container my-28 mx-auto'>
            <div className='md:flex w-3/4 mx-auto gap-20 mb-20 items-center'>
                <div>
                    <img className='w-full rounded' src={chefPicture} alt="" />
                </div>
                <div className='p-10 grid grid-cols-1 gap-5 rounded shadow-2xl'>
                    <h2 className='text-3xl font-bold text-green-600'>{chefName}</h2>
                    <p>{description}</p>
                    <div className='flex gap-2 items-center'>
                        <FaThumbsUp />
                        <p>{likes}+ Likes</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaPizzaSlice />
                        <p>{numberOfRecipes}+ Recipes</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaUtensils />
                        <p>{yearsOfExperience}+ Years of Experience</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Chef;