import React, { Component } from "react";
import "./ScoreSection.css";

class ScoreSection extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <h4 className="col-md-6 text-center score-section-instruction-text">Click an image to begin!</h4>
                    <h4 className="col-md-6 text-center score-section-showscore-text">Score: {this.props.score} | Top Score: {this.props.topScore} </h4>
                </div>
                <hr className="score-divider" />
            </React.Fragment>
        )
    }
}

export default ScoreSection;