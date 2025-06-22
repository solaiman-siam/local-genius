"use client";



const ErrorPage = ({error, reset}) => {

    console.log(error.message);

    return (
        <div className="min-h-screen flex-col gap-2 flex justify-center items-center bg-white ">
            <h4>Error: <span className="text-red-400">{error.message}</span></h4>

            <button className="px-4 py-2 cursor-pointer rounded-lg bg-primaryBg text-white" onClick={() => reset()}>Try Again</button>
        </div>
    );
};

export default ErrorPage;