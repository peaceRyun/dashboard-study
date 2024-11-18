'use client';

import React, { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Font Awesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaBars } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { TiTicket } from 'react-icons/ti';
import { GiTreehouse } from 'react-icons/gi';
import { TbBeach } from 'react-icons/tb';
import { GiBlockHouse } from 'react-icons/gi';

const StatePage = () => {
    // const [상태이름, 상태변경함수] = useState(초기값);

    const [name, setName] = useState('김겨울');

    const changeName = (e) => {
        setName(name === '김겨울' ? '김가을' : '김겨울');
    };

    const [num, setNum] = useState(0);

    const increaseNum = (e) => {
        setNum(num + 1);
    };

    const decreaseNum = (e) => {
        setNum(num - 1);
    };

    const [isOpen, setIsOpen] = useState(false);

    const changeStatus = (e) => {
        setIsOpen(!isOpen);
    };

    const sortArr = [
        { value: '컬처 아이콘', icon: <TiTicket /> },
        { value: '한적한 시골', icon: <GiTreehouse /> },
        { value: '최고의 전망', icon: <TbBeach /> },
        { value: '한옥', icon: <GiBlockHouse /> },
    ];

    const [selected, setselected] = useState(0);

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h2>UseState</h2>

            <strong className='block'>{name}</strong>
            <button onClick={changeName} className='p-1 bg-primary-30 rounded'>
                이름 변경
            </button>

            <strong className='block'>{num}</strong>
            <button onClick={increaseNum} className='p-1 bg-green-300 rounded'>
                증가
            </button>
            <button onClick={decreaseNum} className='p-1 bg-red-300 rounded'>
                감소
            </button>
            <button onClick={changeStatus} className='block'>
                {isOpen ? <IoMdClose /> : <FontAwesomeIcon icon={faBars} />}
            </button>

            {/* Airbnb */}
            <div>
                {/* tab */}
                <div className='flex gap-3 items-center'>
                    {sortArr.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setselected(index);
                            }}
                            className={`py-2 flex flex-col items-center ${
                                selected === index ? 'border-b-2 border-gray-600' : ''
                            }`}
                        >
                            {item.icon}
                            {item.value}
                        </button>
                    ))}
                </div>
                {/* tab content */}
                <div className='tab-contents'>
                    {sortArr.map((item, index) => (
                        <div key={index} className={`${selected === index ? 'block' : 'hidden'}`}>
                            {item.value}내용
                        </div>
                    ))}
                </div>
            </div>

            {/* input 상태 관리 */}
            <input
                type='text'
                placeholder='안녕하세요.'
                value={text}
                onChange={handleChange}
                className='bg-red-200 py-30'
            />
            <p>{text}</p>
        </div>
    );
};

export default StatePage;
