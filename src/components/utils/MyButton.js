import React from 'react';
import Button from '@mui/material/Button';
import Ticket from '../../resources/images/icons/ticket.png';

function MyButton(props) {
    return (
        <Button href={props.link} variant="contained" size={props.size ? props.size : "large"} style={{
            background:'#8e8e8e',
            color:'#ffffff',
            ...props.style
        }}>
            {props.iconTicket ? <img src={Ticket} className="iconImage" alt='icon_button'></img> : null}
            {props.text} 
        </Button>
    );
}

export default MyButton;