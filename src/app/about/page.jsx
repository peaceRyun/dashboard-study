'use client';
import { useBtn } from '@/contexts/BtnContext';
import classNames from 'classnames';
import { Heart } from 'lucide-react';
import React, { useState } from 'react';

const AboutPage = () => {
    const { isLiked, toggleLike } = useBtn();
    return (
        <div>
            <button onClick={toggleLike} className='flex gap-2'>
                <Heart fill={isLiked ? 'red' : 'none'} />
            </button>
        </div>
    );
};

export default AboutPage;
