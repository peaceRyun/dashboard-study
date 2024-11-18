'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';
import MiniStateGrid from './components/MiniStateGrid';
import { stateData } from '@/data/stateData';
import Button from '@/components/button/Button';
import CheckTable from './components/CheckTable';
import { tableDataCheck } from '@/data/tableDataCheck';
import OrderCoffee from '../class/page';

const HomePage = () => {
    return (
        <div id='wrap' className='bg-gray-100'>
            <Header />
            {/* ministate */}
            <main className='inner flex flex-col gap-10'>
                <OrderCoffee name='아메리카노' price={3500} />

                <div className='flex flex-col gap-4 lg:flex-row'>
                    <div className='h-30 grow'>
                        <CheckTable tableDataCheck={tableDataCheck} />
                    </div>

                    <div className='h-30 grow flex flex-col gap-4 md:flex-row'>
                        <div className='bg-green-300 h-30 grow'>gg</div>
                        <div className='bg-yellow-300 h-30 grow'>gg</div>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <Button>확인</Button>
                    <Button gray>취소</Button>

                    <button
                        onClick={(event) => {
                            console.log('확인');
                            console.log(event);
                        }}
                        className='bg-red-500 px-5 rounded'
                    >
                        확인
                    </button>
                </div>

                <MiniStateGrid stateData={stateData} />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
