'use client';
import { useCounter } from '@/contexts/CounterContext';
import { ACTION_TYPE, setCount } from '@/reducers/counterReducer';
import React, { useReducer } from 'react';

const buttonStyle = 'px-4 rounded text-black text-4xl';

const ReducerPage = () => {
    const { count, dispatch } = useCounter();
    return (
        <div className='p-10'>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.DECREMENT });
                }}
                className={buttonStyle}
            >
                -
            </button>
            <strong className='text-red-500 text-4xl'>
                {count.name} : {count.counter}
            </strong>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.INCREMENT });
                }}
                className={buttonStyle}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.RESET });
                }}
                className={buttonStyle}
            >
                리셋
            </button>
        </div>
    );
};

export default ReducerPage;
