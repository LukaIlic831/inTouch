import React from 'react';

const Loading = () => {
    return (
        <div className='loading__wrapper'>
            <svg viewBox="25 25 50 50" className='loading'>
                <circle className='loading__circle' r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    );
}

export default Loading;
