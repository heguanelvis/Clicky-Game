import React, { Component } from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid jumbotron-bg">
                <div className="container text-center">
                    <h1 className="display-4 jumbotron-title-text animated infinite pulse">CLICKY GAME</h1>
                    <p className="lead jumbotron-lead-text wow animated tada">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;