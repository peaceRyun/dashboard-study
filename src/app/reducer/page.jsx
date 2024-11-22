'use client';
import { ACTION_TYPE, setCount } from '@/reducers/counterReducer';
import React, { useReducer } from 'react';

const buttonStyle = 'px-4 rounded text-black text-4xl';

const ReducerPage = () => {
    // const [count, setCount] = useState(0);
    // const [현재상태, 파견함수] = useReducer(상태변경함수, 초기값);
    const [count, dispatch] = useReducer(setCount, { counter: 0, name: 'dd' });

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
