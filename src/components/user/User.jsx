'use client';
import React, { createContext, useContext } from 'react';

// 생성
const UserContext = createContext();

const userData = {
    name: '홍길동',
    email: 'example@mail.com',
    age: '22',
    address: '서울특별시 서초구',
};

const User = () => {
    return (
        //보급
        <>
            <UserContext.Provider value={userData}>
                <h2>사용자 정보</h2>
                <UserProfile
                    name={userData.name}
                    email={userData.email}
                    age={userData.age}
                    address={userData.address}
                />
                <hr />
                <UserProfile {...userData} />
            </UserContext.Provider>
        </>
    );
};

const UserProfile = () => {
    //사용1
    const { name, email, age, address } = useContext(UserContext);
    return (
        <>
            <dl>
                <dt>이름</dt>
                <dd>{name}</dd>
            </dl>
            <dl>
                <dt>이메일</dt>
                <dd>{email}</dd>
            </dl>
            <UserInfo age={age} address={address} />
        </>
    );
};

const UserInfo = () => {
    //사용2
    const { age, address } = useContext(UserContext);
    return (
        <>
            <dl>
                <dt>나이</dt>
                <dd>{age}</dd>
            </dl>
            <dl>
                <dt>주소</dt>
                <dd>{address}</dd>
            </dl>
        </>
    );
};

export default User;
