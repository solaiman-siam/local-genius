import Faq from '@/components/Faq';
import Hero from '@/components/Hero';
import HowItWorksSec from '@/components/HowItWorksSec';
import LocalInteligence from '@/components/LocalInteligence';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import SmartFeaturesSec from '@/components/SmartFeaturesSec';
import SubscriptionPlan from '@/components/SubscriptionPlan';
import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-[#F6F6F6] text-black min-h-screen'>
      <div className='py-6'>
        <Navbar/>
      </div>
      <div>
        <Hero/>
        <div className='bg-white relative z-[8] rounded-[200px] py-20'>
          <SmartFeaturesSec />
          <HowItWorksSec />
          <LocalInteligence />
          <SubscriptionPlan />
          <Faq/>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;