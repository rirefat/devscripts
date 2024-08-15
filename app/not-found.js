import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-start max-h-screen text-center px-4">
            {/* Professional SVG Illustration */}
            <div className="mb-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 sm:h-48 sm:w-48"
                    viewBox="0 0 1024 1024"
                    fill="none"
                >
                    <path
                        fill="#0f172a"
                        d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0zm0 931.2C276.25 931.2 92.8 747.75 92.8 512S276.25 92.8 512 92.8 931.2 276.25 931.2 512 747.75 931.2 512 931.2z"
                    />
                    <path
                        fill="#000"
                        d="M684.8 409.6H451.2v102.4h-204.8V307.2h307.2V204.8h102.4v102.4h102.4v102.4H684.8V409.6zM409.6 512H307.2v102.4h102.4v204.8H204.8V614.4H102.4v-102.4h102.4V307.2h204.8V204.8h102.4v307.2H409.6zm409.6 102.4V819.2H614.4V716.8H512V614.4h204.8V512h102.4z"
                    />
                </svg>
            </div>

            {/* Not Found Message */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                404 - Page Not Found
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Oops! The page you are looking for does not exist or has been moved.
            </p>

            {/* Call to Action Button */}
            <div>
                <Link href="/" className="inline-block bg-[#0f172a] text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg transition transform hover:scale-105 hover:shadow-lg">
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
