import React from 'react';
import Carroussel from './Carroussel';
import TimeUntil from './TimeUntil';

function Featured() {
    return (
        <div className='featured_container'>
            <Carroussel />
            <div className='artist_name'>
                <div className='wrapper'>
                    Ariana Grande
                </div>
            </div>
            <TimeUntil />
        </div>
    );
}

export default Featured;