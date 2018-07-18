import React from 'react';
import classes from './MyJumbotron.css';
import './MyJumbotron.css';
import { Jumbotron } from 'reactstrap';

const myJumbotron = props => {
    return(
    <Jumbotron className={classes.jumboBg}>
            <h1 className="display-3 text-center wow animated infinite pulse shrikhand">GUAN'S CLICKY GAME!</h1>
            <h4 className="text-center wow animated zoomIn text-white">Click on an image to earn points, but don't click on any more than once!</h4>
    </Jumbotron>
    )
}

export default myJumbotron;