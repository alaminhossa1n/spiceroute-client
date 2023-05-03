import React from 'react';
import { Link } from 'react-router-dom';


const ChefCard = ({cf}) => {

    const {chefName, chefPicture, numberOfRecipes, yearsOfExperience, likes} = cf

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={chefPicture} alt="Random" />
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{chefName}</p>
                <p>Experience: {yearsOfExperience}</p>
                <p>Numbers of recipes: {numberOfRecipes}</p>
                <p>Likes: {likes} Years</p>
            </div>
            <div className="px-6 pt-4 pb-2">
               <Link to={`/chef/${cf.id}`}>
               <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    View Recipes
                </button></Link>
            </div>
        </div>


    );
};

export default ChefCard;