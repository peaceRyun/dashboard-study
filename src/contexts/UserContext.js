'use client';

import { userData } from '@/data/userData';
import React, { createContext, useContext } from 'react';

// 생성
const UserContext = createContext();

// 보급
export const UserProvider = ({ children }) => {
    return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

// 사용
export const useUser = () => {
    return useContext(UserContext);
};
