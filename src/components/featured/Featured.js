import React from 'react';
import Carroussel from './Carroussel';

function Featured() {
    return (
        <div className='featured_container'>
            <Carroussel />
            <div className='artist_name'>
                <div className='wrapper'>
                    Ariana Grande
                </div>
            </div>
        </div>
    );
}

export default Featured;