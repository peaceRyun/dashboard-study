'use client';

import React from 'react';

const EventPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('제출');
    };

    // preventDafult란?
    // 1. a태그를 눌렀을 때도 링크가 작동하지 않도록 하고 싶을 때
    // 2. 버튼을 눌렀을 때 페이지가 새로고침 되는 것을 막고 싶을 때

    return (
        <div>
            <h2 className='text-5xl'>마우스 이벤트</h2>

            {/* 클릭 이벤트 */}
            <button
                onClick={() => {
                    console.log('클릭');
                }}
                onDoubleClick={() => {
                    console.log('더블클릭');
                }}
            >
                클릭 이벤트
            </button>

            <div
                onMouseEnter={() => {
                    console.log('마우스 오버');
                }}
                onMouseLeave={(e) => console.log('마우스 나감')}
                className='w-20 h-20 bg-primary-10'
            >
                마우스 오버/아웃
            </div>

            {/* <div
                onMouseMove={(e) => {
                    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
                }}
                className='w-40 h-40 bg-primary-10'
            >
                마우스를 움직여보세요
            </div> */}

            {/* 폼 이벤트 */}
            <form onSubmit={handleSubmit}>
                {/* 입력변경 */}
                <input
                    className='bg-gray-300'
                    type='text'
                    onChange={(e) => {
                        console.log('값 변경', e.target.value);
                    }}
                    // 접근성이나 탭할 때 쓰인다.
                    onFocus={(e) => console.log('포커스')}
                />

                <input
                    type='checkbox'
                    onChange={(e) => {
                        console.log('체크', e.target.checked);
                    }}
                />

                <select
                    onChange={(e) => {
                        console.log('선택:', e.target.value);
                    }}
                >
                    <option value='option1'>옵션 1</option>
                    <option value='option2'>옵션 2</option>
                </select>

                <button type='submit'>제출</button>
            </form>
        </div>
    );
};

export default EventPage;
