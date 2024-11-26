import { BtnProvider, useBtn } from '@/contexts/BtnContext';
import classNames from 'classnames';
import { Heart, UserRoundPlus } from 'lucide-react';
import React from 'react';

const BtnLike = () => {
    const { isLiked, toggleLike } = useBtn();

    return (
        <button onClick={toggleLike} className='flex gap-2'>
            <Heart fill={isLiked ? 'red' : 'none'} />
            Like
        </button>
    );
};
const BtnFollow = () => {
    const { isLiked, toggleLike } = useBtn();
    return (
        <button onClick={toggleLike} className={classNames('flex gap-2', isLiked ? ' bg-gray-50' : 'bg-green-400')}>
            <UserRoundPlus fill={isLiked ? 'none' : 'green'} />
            +팔로우
        </button>
    );
};

const Like = () => {
    return (
        <>
            <BtnLike />
            <BtnFollow />
        </>
    );
};

export default Like;
