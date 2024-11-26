'use client';

import Like from '@/components/like/Like';
import User from '@/components/user/User';

const ContextPage = () => {
    return (
        <div>
            {/* like 컴포넌트*/}
            <Like />
            {/* data 컴포넌트*/}
            <User />
        </div>
    );
};

export default ContextPage;
