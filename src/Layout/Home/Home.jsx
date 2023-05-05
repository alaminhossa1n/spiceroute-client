import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import SomeRecipe from './SomeRecipe';
import Lottie from 'lottie-react';
import animationData from '../../assets/ooking-ingredients.json';
import { FaCoffee, FaGlassCheers, FaHardHat, FaPizzaSlice } from 'react-icons/fa';



const Home = () => {

    const chef = useLoaderData();

    const someRecipes = chef[0].recipes;

    return (
        <div className='mx-auto container'>

            {/* Banner Start */}

            <div className='md:grid grid-cols-2 border-gray-950 gap-5 items-center'>

                <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                />
                <div className='px-5'>
                    <h2 className='text-6xl font-semibold'><span className='text-amber-400'>Discover</span> the <span className='text-green-600'>World</span> of Exotic Flavors</h2>
                    <p className='mt-10'>SpiceRoute is your ultimate destination to explore a vast collection of aromatic spices from around the world. Discover the secret of exotic flavors and indulge in the rich heritage of traditional spices. Our mission is to bring the finest and freshest spices to your kitchen to enhance your culinary experience. Join us on a journey of taste and flavor and discover the world of spices with SpiceRoute.</p>
                </div>
            </div>

            {/* Banner End */}

            {/* Service Section start */}
            <section className='bg-yellow-100 px-10 pt-10 pb-20 rounded-lg'>
                <div className='mb-10'>
                    <h2 className='text-center text-5xl'>You Will Find</h2>
                </div>
                <div className=' grid md:grid-cols-4 gap-5'>
                    <div className='shadow p-5 bg-white hover:bg-yellow-200 rounded-xl w-3/4 md:w-full mx-auto'>
                        <p className='text-7xl text-green-600 mb-3'><FaCoffee /></p>
                        <h3 className='text-2xl font-medium'>Good Quality</h3>
                        <p>Nothing But the Finest</p>
                    </div>
                    <div className='shadow p-5 bg-white hover:bg-yellow-200 rounded-xl w-3/4 md:w-full mx-auto'>
                        <p className='text-7xl text-green-600 mb-3'><FaPizzaSlice /></p>
                        <h3 className='text-2xl font-medium'>Fresh Food</h3>
                        <p>Taste the Season's Best</p>
                    </div>
                    <div className='shadow p-5 bg-white hover:bg-yellow-200 rounded-xl w-3/4 md:w-full mx-auto'>
                        <p className='text-7xl text-green-600 mb-3'><FaHardHat /></p>
                        <h3 className='text-2xl font-medium'>Best Chef</h3>
                        <p>Artistry on a Plate</p>
                    </div>
                    <div className='shadow p-5 bg-white hover:bg-yellow-200 rounded-xl w-3/4 md:w-full mx-auto'>
                        <p className='text-7xl text-green-600 mb-3'><FaGlassCheers /></p>
                        <h3 className='text-2xl font-medium'>Unique Flavors</h3>
                        <p>Bold & Unforgettable Tastes</p>
                    </div>
                </div>
            </section>
            {/* Service Section End */}

            {/* chef Card start */}
            <div>
                <h2 className='text-center text-5xl my-10'>Here is Our Chef</h2>
            </div>
            <div className='md:grid grid-cols-3 gap-5 w-full'>
                {
                    chef.map(cf => <ChefCard
                        key={cf.id}
                        cf={cf}
                    >
                    </ChefCard>)
                }
            </div>

            {/* chef card end */}


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