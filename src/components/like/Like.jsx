import classNames from 'classnames';
import { Heart, UserRoundPlus } from 'lucide-react';
import React, { useState } from 'react';

const BtnLike = ({ isLiked, toggleLike }) => {
    return (
        <button onClick={toggleLike} className='flex gap-2'>
            <Heart fill={isLiked ? 'red' : 'none'} />
            Like
        </button>
    );
};
const BtnFollow = ({ isLiked, toggleLike }) => {
    return (
        <button onClick={toggleLike} className={classNames('flex gap-2', isLiked ? 'bg-green-400' : ' bg-gray-50')}>
            <UserRoundPlus fill={isLiked ? 'green' : 'none'} />
            +팔로우
        </button>
    );
};

const Like = () => {
    const [isLiked, setisLiked] = useState(false);
    const toggleLike = () => {
        setisLiked(!isLiked);
    };
    return (
        <div>
            {/* 하트 토글 버튼 */}
            <BtnLike isLiked={isLiked} toggleLike={toggleLike} />
            <BtnFollow isLiked={isLiked} toggleLike={toggleLike} />
        </div>
    );
};

export default Like;
