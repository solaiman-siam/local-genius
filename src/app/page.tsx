import Hero from '@/components/Hero';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-[#F6F6F6] text-black min-h-screen'>
      <div className='py-6'>
        <Navbar/>
      </div>
      <div>
        <Hero/>

      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;