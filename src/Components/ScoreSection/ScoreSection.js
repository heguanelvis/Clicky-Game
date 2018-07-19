import React, { Component } from "react";
import "./ScoreSection.css";

class ScoreSection extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <h4 className="col-md-6 text-center score-section-instruction-text wow animated tada">Click an image to begin!</h4>
                    <h4 className="col-md-6 text-center score-section-showscore-text wow animated tada">Score: {this.props.score} | Top Score: {this.props.topScore} </h4>
                </div>
                <hr className="score-divider" />
            </React.Fragment>
        )
    }
}

export default ScoreSection;