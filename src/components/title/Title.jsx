import React from 'react';
import { ButtonIcon } from '../button/Button';
import { IoIosMore } from 'react-icons/io';

const Title = ({ title }) => {
    return (
        <header className='flex items-center justify-between'>
            <h2>{title}</h2>
            <ButtonIcon blind='옵션보기' className='w-9 h-9 bg-gray-100'>
                <IoIosMore />
            </ButtonIcon>
        </header>
    );
};

export default Title;
