'use client'
import { FallingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex items-center justify-center max-h-screen'>
            <FallingLines
                color="#011627"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    );
};

export default Loading;