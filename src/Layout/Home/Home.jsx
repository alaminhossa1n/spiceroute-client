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
                <h2 className='text-center text-6xl my-10'>Here is some Recipes</h2>
                <div className='w-3/4 mx-auto grid grid-cols-1 gap-5'>
                    {
                        someRecipes.map((someRecipe, i) => <SomeRecipe
                            key={i}
                            someRecipe={someRecipe}
                        ></SomeRecipe>)
                    }
                </div>
            </div>

            <div>
                <h2 className='text-center text-5xl my-10'>What Customers Are Saying
                    About Us</h2>
                <div className='md:grid grid-cols-3 my-20'>

                    <div className='text-center'>
                        <img className='mx-auto rounded-full mb-3' width="104" height="104" src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-3-104x104.jpg"></img>
                        <p>“Was so impressed I had to find out more and tell my friends! Last week we attended a fabulous pre-wedding afternoon party”</p>
                        <p className='text-xl font-semibold mt-5'>James B.</p>
                    </div>
                    <div className='text-center'>
                        <img className='mx-auto rounded-full mb-3' width="104" height="104" src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-1-104x104.jpg"></img>
                        <p>“Was so impressed I had to find out more and tell my friends! Last week we attended a fabulous pre-wedding afternoon party”</p>
                        <p className='text-xl font-semibold mt-5'>Lucinda D.</p>
                    </div>
                    <div className='text-center'>
                        <img className='mx-auto rounded-full mb-3' width="104" height="104" src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-2-104x104.jpg"></img>
                        <p>“Was so impressed I had to find out more and tell my friends! Last week we attended a fabulous pre-wedding afternoon party”</p>
                        <p className='text-xl font-semibold mt-5'>Thomas S..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;