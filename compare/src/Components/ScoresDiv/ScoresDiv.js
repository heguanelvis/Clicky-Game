import React, { Component } from 'react';
import classes from './ScoresDiv.css';

class ScoresDiv extends Component {
    state = {

    }

    render () {
        return (
            <div className={classes.bgScore}>
                <h4 className="wow animated shake">Click an image to begin!</h4>
                <h4>Score: {this.props.score} | Top Score: {this.props.topScore} </h4>
            </div>
        )
    }
}

export default ScoresDiv;