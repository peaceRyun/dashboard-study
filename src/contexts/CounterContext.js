'use client';

import { setCount } from '@/reducers/counterReducer';
import React, { createContext, useContext, useReducer } from 'react';

// 만들고
const CounterContext = createContext();

//공급
export const CounterProvider = ({ children }) => {
    const [count, dispatch] = useReducer(setCount, { counter: 0, name: 'dd' });

    return <CounterContext.Provider value={{ count, dispatch }}>{children}</CounterContext.Provider>;
};

//사용한다
export const useCounter = () => {
    const counterUseContext = useContext(CounterContext);
    return counterUseContext;
};
