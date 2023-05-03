import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';

const Home = () => {
    const chef = useLoaderData()
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
        </div>
    );
};

export default Home;