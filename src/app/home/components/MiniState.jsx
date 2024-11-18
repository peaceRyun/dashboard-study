import Card from '@/components/card/Card';
import IconBox from '@/components/icon/IconBox';
import Image from 'next/image';
import React from 'react';
import { MdBarChart } from 'react-icons/md';
import FlagImage from '../../../components/icon/FlagImage';

const MiniState = ({ name, value, startContent, endContent, growth }) => {
    return (
        <Card>
            <div className='flex items-center gap-5'>
                {/*앞쪽 아이콘*/}

                {/* && 연산자를 사용해서 startContent 참일 경우에만 보임 */}

                {startContent && <IconBox className='w-14 h-14 bg-primary-10 text-4xl'>{startContent}</IconBox>}

                {/* 텍스트 */}
                <div>
                    <span className='text-primary-60 text-sm'>{name}</span>
                    <strong className='block text-lg'>{value}</strong>
                    {growth && (
                        <div className='flex gap-2'>
                            <span className='text-secondary text-sm font-bold'>{growth}</span>
                            <span className='text-gray-500 text-sm'>Since last month</span>
                        </div>
                    )}
                </div>
                {/* 국기 이미지 */}
                {endContent && (
                    <div className='ml-auto'>
                        <FlagImage country='usa' size='md' />
                    </div>
                )}
            </div>
        </Card>
    );
};

export default MiniState;