import React from 'react';
import classes from './ClickyCard.css';

const clickyCard = props => {
    return (
        <img className={classes.cardBg} src={props.src} alt={props.name}/>
    )
}

export default clickyCard;