import React from 'react';
import MiniState from './MiniState';

const MiniStateGrid = ({ stateData }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3'>
                {/* {배열이름.map((item, index) => 반복코드)} */}

                {stateData.map((item, index) => (
                    <MiniState
                        key={index}
                        {...item}
                        // name={item.name}
                        // value={item.value}
                        // growth={item.growth}
                        // startContent={item.startContent}
                        // endContent={item.endContent}
                    />
                ))}
            </div>
        </div>
    );
};

export default MiniStateGrid;
