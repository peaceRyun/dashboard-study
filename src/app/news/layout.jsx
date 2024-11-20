import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

const NewsLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default NewsLayout;
