import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';

function Discount() {
    const end = 30;
    const[start, setStart] = useState(0);

    const percentage = () => {
        if(start < end){
            setStart(prevCount => prevCount+1)
        }
    }

    useEffect(() => {
        if(start > 0 && start < 30){
            setTimeout(() => {
                setStart(prevCount => prevCount+1)
            }, 30);
        }
    },[start])

    return (
        <div className='center_wrapper'>
            <div className='discount_wrapper'>
                <Fade onVisibilityChange={(inView) => {
                    if(inView){
                        percentage()
                    }
                }}>
                    <div className='discount_percentage'>
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className='discount_description'>
                        <h3>Purchase tickets before 30th June</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <MyButton text = "Purchase tickets" link="https://google.com" size="small" style = {{
                            background: "#ff4800",
                            color: '#ffffff'
                        }} iconTicket = {true}/>
                    </div>
                </Slide>
            </div>
        </div> 
    );
}

export default Discount;