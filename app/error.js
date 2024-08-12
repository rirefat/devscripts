'use client'

import Image from "next/image";

const Error = ({ error, reset }) => {
    return (
        <div className="flex justify-center items-center flex-col gap-5">
            <h2 className="text-3xl mb-6 font-semibold">Something went wrong!</h2>
            <p className="text-red-800 mb-6">{error.message}</p>

            <Image src={'/warning.svg'} width={300} height={300} alt="Warning"/>

            <div className="mt-10 flex flex-wrap gap-4">
                <button
                    onClick={() => reset()}
                    className="inline-flex justify-center rounded-lg bg-slate-900 px-6 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                >
                    <span>Try Again</span>
                </button>
            </div>
        </div>
    );
};

export default Error;