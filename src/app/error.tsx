"use client"

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <h1>Error Page</h1>
            <h4>Error Message : {error.message}</h4>

            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
};

export default ErrorPage;