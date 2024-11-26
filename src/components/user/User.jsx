'use client';
import { UserProvider, useUser } from '@/contexts/UserContext';
import React from 'react';

const User = () => {
    return (
        //보급
        <>
            <UserProvider>
                <h2>사용자 정보</h2>
                <UserProfile />
            </UserProvider>
        </>
    );
};

const UserProfile = () => {
    //사용1
    const { name, email, age, address } = useUser();
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
    const { age, address } = useUser();
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
