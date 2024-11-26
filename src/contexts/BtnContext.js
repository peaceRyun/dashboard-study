'use client';

import { createContext, useContext, useState } from 'react';

// context 생성
const BtnContext = createContext();

// context 공급(BtnContext컴포넌트를 prop값이 많으니까 한번 더 컴포넌트화)
export const BtnProvider = ({ children }) => {
    const [isLiked, setisLiked] = useState(false);
    const toggleLike = () => {
        setisLiked(!isLiked);
    };
    return <BtnContext.Provider value={{ isLiked, toggleLike }}>{children}</BtnContext.Provider>;
};

// context 사용
export const useBtn = () => {
    return useContext(BtnContext);
};

//만약 없다면?
export const useButtonContext = () => {
    const context = useContext(BtnContext);
    if (!context) {
        throw new Error('useButtonContext must be used within a ButtonProvider');
    }
    return context;
};
