import React, { Component } from "react";
import "./ClickyCard.css";

class ClickyCard extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-4 col-6 animated infinite pulse">
                <img src={this.props.src} className="clicky-image" alt={this.props.name} onClick={this.props.clicked}/>
            </div>
        )
    }
}

export default ClickyCard;