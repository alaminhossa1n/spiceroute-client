import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaThumbsUp, FaUtensils } from "react-icons/fa";


const ChefCard = ({ cf }) => {

    const { chefName, chefPicture, numberOfRecipes, yearsOfExperience, likes } = cf

    return (
        <div className="rounded shadow-lg">
            <LazyLoad threshold={0.95}>
                <img className="w-full p-3 md:p-0 rounded" src={chefPicture} alt="Random" />
            </LazyLoad>

            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2 text-green-600">{chefName}</p>
                <div className='grid grid-cols-1 gap-3'>
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
            <div className="px-6 pt-4 pb-2">
                <Link to={`/chef/${cf.id}`}>
                    <button className="btn border-none">
                        View Recipes
                    </button></Link>
            </div>
        </div>


    );
};

export default ChefCard;