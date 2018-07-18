import React, { Component } from 'react';
import Jumbotron from "./Components/Jumbotron";
import ScoreSection from "./Components/ScoreSection";
import ClickyCard from "./Components/ClickyCard";
import clickImages from "./clickyImages.json";
import sweetAlert from "./utils/SweetAlert";

class App extends Component {
    state = {
        clickImages,
        score: 0,
        topScore: 0,
        clickedIds: [],
        gameOver: false,
    }

    componentDidMount() {
        this.shuffleCards(this.state.clickImages);
    }

    shuffleCards = (clickImages, clickedId) => {
        const array = [...clickImages];
        let i = array.length;
        while (i > 0) {
            let j = Math.floor(Math.random() * i);
            i--;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        if (clickedId) {
            let clickedIds = this.state.clickedIds;
            clickedIds.push(clickedId)
            this.setState({ 
                clickImages: array, 
                clickedIds: clickedIds
            })
        } else {
            this.setState({
                clickImages: array
            })
        }
    }

    handleClickImage = id => {
        console.log("clicked the image No.", id);
        let found = this.state.clickedIds.findIndex(e => e === id);
        if (found >= 0) {
            sweetAlert("gameOver", "game-over-text", "You clicked the wrong one! Next time!");
            let score = this.state.clickedIds.length
            if (score > this.state.topScore && this.state.score < 12) {
                this.setState({ 
                    score: score, 
                    topScore: score,
                    clickedIds: [],
                    gameOver: true
                });
            } else if (this.state.score < 12) {
                this.setState({ 
                    score: score,
                    clickedIds: [],
                    gameOver: true
                }) ;
            } else if (this.state.score === 12) {
                sweetAlert("success", "success-text", "You are brilliant! Got all 12 correct!")
                setTimeout(() => {
                    this.setState({
                        score: score,
                        topScore: score,
                        clickedIds: [],
                        gameOver: true
                    })
                });
            }
        } else if (found === -1) {
            let score = this.state.clickedIds.length + 1
            if (this.state.gameOver === false && score > this.state.topScore) {
                this.setState({ score: score, topScore: score});
            } else if (this.state.gameOver === false) {
                this.setState({ score: score});
            } else {
                this.setState({
                    clickImages,
                    score: 1,
                    topScore: 1,
                    clickedIds: [],
                    gameOver: false,
                })
            }
            setTimeout(() => {
                this.shuffleCards(this.state.clickImages, id)
            }, 100);
        }
    }

    renderClickyCards = () => {
        return this.state.clickImages.map(clickImage => (
            <ClickyCard key={clickImage.id} id={clickImage.id} name={clickImage.name} src={clickImage.image} clicked={() => this.handleClickImage(clickImage.id)}/>
        ))
    }
    
    render() {
        return (
            <React.Fragment>
                <Jumbotron />
                <ScoreSection score={this.state.score} topScore={this.state.topScore}/>
                <div className="row justify-content-around">
                    {this.renderClickyCards()}
                </div>
            </React.Fragment>
        )
    }
}

export default App;
