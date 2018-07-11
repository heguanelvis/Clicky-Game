import React, { Component } from 'react';
import classes from './App.css';
import MyJumbotron from './Components/MyJumbotron';
import ScoresDiv from './Components/ScoresDiv';
import ClickyCard from './Components/ClickyCard';
import clickImages from './clickyImages.json';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  state = {
    clickImages,
    score: 0,
    topScore: 0,
  }

  render() {
    return (
      <React.Fragment>
        <MyJumbotron />
        <ScoresDiv score={this.state.score} topScore={this.state.topScore}/>
        <Container>
        <Row>
        {this.state.clickImages.map(clickImage => (
            <Col xs="6" sm="4" md="3">
            <ClickyCard id={clickImage.id} name={clickImage.name} src={clickImage.image}/>
            </Col>
        ))}
        </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
