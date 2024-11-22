'use client';
import React, { useEffect, useState } from 'react';

const EffectPage = () => {
    const [color, setColor] = useState('lightblue');

    // 마운트시에만 실행하려면? 의존선배열을 지운다.
    // useEffect(함수, [의존성배열])

    // 마운트
    useEffect(() => {
        // console.log('마운트시에만 실행');
        // body에 배경색 추가
        document.body.style.backgroundColor = 'lightblue';

        // 언마운트시에만 실행
        return () => {
            // body에 배경색 제거
            document.body.style.backgroundColor = '';
        };
    }, []);

    // 업데이트시에만 실행
    useEffect(() => {
        // console.log('업데이트시에만 실행');
        // body에 배경색 추가
        document.body.style.backgroundColor = color;
    }, [color]);

    const [count, setCount] = useState(0);

    //마운트&업데이트 시에 실행
    useEffect(() => {
        // console.log('마운트, 업데이트시에 실행');
    });

    //업데이트 시 (특정 상태값이 변경될 때) 만 실행
    useEffect(() => {
        console.log('2 - 업데이트시에 실행');

        // 언마운트
        return () => {
            console.log('언마운트시에 실행');
        };
    }, [count]);

    const [timer, setTimer] = useState(0);
    const [isShow, setIsShow] = useState(true);

    // 마운트시 실행
    useEffect(() => {
        let interval;

        if (isShow) {
            interval = setInterval(() => {
                //setInterval을 사용하여 1초마다 timer 상태값 변경
                setTimer((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isShow]);

    const hideTimer = () => {
        setIsShow(false);
        setTimer(0);
    };
    return (
        <div>
            <div>
                {/* 삼항연산자 */}
                {/* isShow ? 참 : 거짓 */}
                {isShow ? (
                    <>
                        <strong>{timer}초</strong>
                        <button onClick={hideTimer}>타이머 숨기면서 정지</button>
                    </>
                ) : (
                    <button onClick={() => setIsShow(true)}>타이머 보이기</button>
                )}
            </div>
            <div>
                유 클릭드 {count} 타임즈
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                    className='inc px-3 rounded bg-black text-white'
                >
                    증가
                </button>
            </div>
            <h1 className='py-10'>EffectPage</h1>
            <button
                onClick={() => {
                    setColor('yellow');
                }}
                className='bg-violet-300 p-3 rounded'
            >
                색상변경
            </button>
        </div>
    );
};

export default EffectPage;
EffectPage;
