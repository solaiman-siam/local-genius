"use client"

const ErrorPage = ({error , reset} : {error: Error & {digest?: string , reset: () => void}}) => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <h1>Error Page</h1>
        </div>
    );
};

export default ErrorPage;