'use client';
import React, { useState } from 'react';

const buttonStyle = 'px-4 rounded text-black text-4xl';

const ReducerPage = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='p-10'>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
                className={buttonStyle}
            >
                -
            </button>
            <strong className='text-red-500 text-4xl'>{count}</strong>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
                className={buttonStyle}
            >
                +
            </button>
        </div>
    );
};

export default ReducerPage;
