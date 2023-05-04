import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const ChefCard = ({ cf }) => {

    const { chefName, chefPicture, numberOfRecipes, yearsOfExperience, likes } = cf

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <LazyLoad threshold={0.95}>
                <img className="w-full" src={chefPicture} alt="Random" />
            </LazyLoad>

            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{chefName}</p>
                <p>Experience: {yearsOfExperience}</p>
                <p>Numbers of recipes: {numberOfRecipes}</p>
                <p>Likes: {likes} Years</p>
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