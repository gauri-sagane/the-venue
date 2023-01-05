import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Footer() {
    return (
       <footer className='bck_red'>
            <Fade>
                <div className='font-righteous footer_logo_venue'>The Venue</div>
                <div className='footer_copyright'>The Venue 2023 all rights reserved</div>
            </Fade>
       </footer>
    );
}

export default Footer;