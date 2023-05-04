import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import SomeRecipe from './SomeRecipe';

const Home = () => {
    const chef = useLoaderData();
    const someRecipes = chef[0].recipes;
    return (
        <div className='mx-auto container'>
            <div className='md:grid grid-cols-2 border-gray-950 gap-5 items-center my-20'>
                <div className='h-96'>
                    <img className='object-cover h-full w-full' src="https://i.ibb.co/995hzKF/bannner.jpg" alt="" />
                </div>
                <div>
                    <h2 className='text-6xl font-semibold'>Discover the World of Exotic Flavors</h2>
                    <p className='mt-5'>SpiceRoute is your ultimate destination to explore a vast collection of aromatic spices from around the world. Discover the secret of exotic flavors and indulge in the rich heritage of traditional spices. Our mission is to bring the finest and freshest spices to your kitchen to enhance your culinary experience. Join us on a journey of taste and flavor and discover the world of spices with SpiceRoute.</p>
                </div>
            </div>
            <div className='md:grid grid-cols-3 shadow gap-5 w-full'>
                {
                    chef.map(cf => <ChefCard
                        key={cf.id}
                        cf={cf}
                    >
                    </ChefCard>)
                }
            </div>


            <div>
                <h2>Our Services</h2>
            </div>
            <div>
                <h2 className='text-center text-6xl my-10'>Here is some Recipes</h2>
                <div className='w-3/4 mx-auto grid grid-cols-1 gap-5'>
                    {
                        someRecipes.map((someRecipe, i) => <SomeRecipe
                        key={i}
                        someRecipe = {someRecipe}
                        ></SomeRecipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;