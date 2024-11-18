'use client';

import React from 'react';
import styled from 'styled-components';

const Button = ({ gray, children, className }) => {
    return (
        <button
            className={`rounded px-5 py-2  text-white hover:bg-secondary ${
                gray ? 'bg-gray-500' : 'bg-primary'
            } ${className}`}
        >
            {children}
        </button>
    );
};

export const ButtonIcon = ({ children, className, blind }) => {
    return (
        <button className={`flex justify-center items-center rounded text-white hover:bg-secondary  ${className}`}>
            {children}
            <span className='blind'>{blind}</span>
        </button>
    );
};

// const ButtonStyled = styled.button`
//     &::before {
//         content: '🛒';
//     }
// `;

export default Button;
