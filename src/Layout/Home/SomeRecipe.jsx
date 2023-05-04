import React from 'react';

const SomeRecipe = ({ someRecipe }) => {
    const {recipeName, img} = someRecipe
    console.log(recipeName, img);
    return (
        <div className='overflow-hidden flex items-center gap-10 shadow-xl mb-10'>
            <div>
                <img className='w-96 object-cover' src={img} alt="" />
            </div>
            <div>
                <p className='text-5xl'>{recipeName}</p>
            </div>
        </div>
    );
};

export default SomeRecipe;