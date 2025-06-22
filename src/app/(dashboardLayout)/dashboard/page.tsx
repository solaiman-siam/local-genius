import { Metadata } from 'next';

import React from 'react';



export const metadata : Metadata = {
    title: 'Dashboard',
    description: 'This is basically a dashboard page and there are some route and main chatbot functionalities are working togetherly'
}

const DashboardPage = () => {
    return (
        <div className=' w-full  flex justify-center items-center'>
           <div className='flex flex-col gap-2 h-full justify-center items-center'>
             <h1 className='text-4xl font-medium'>Welcome to Local Genius</h1>
            <p className='text-description  w-6/12 text-center'>Get started by writing a task and Chat can do the rest. Not sure where to start? Check out the Prompt Library for inspiration.</p>
           </div>
            
        </div>
    );
};

export default DashboardPage;