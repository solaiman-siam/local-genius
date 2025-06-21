import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';



export const metadata : Metadata = {
    title: 'Dashboard',
    description: 'This is basically a dashboard page and there are some route and main chatbot functionalities are working togetherly'
}

const DashboardPage = () => {
    return (
        <div className='bg-white w-full h-screen'>
            <h1 className='text-4xl font-semibold text-black'>From Dashboard Home</h1>

            <Link href={'/settings'}> <h4 className='text-semibold fon-medium text-black py-8'>Settings Page</h4> </Link>
        </div>
    );
};

export default DashboardPage;