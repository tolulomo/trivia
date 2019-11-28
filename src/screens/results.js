import React from "react";
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import * as appActions from '../redux/actions/app';
import { Block } from "galio-framework";
import { Styles } from '../constants';
import { SuccessBox, FailedBox, Background } from '../components';

class Results extends React.Component {

  // Restart Game Function
  restartGame = async() => {
    await this.props.runQuestions();
    return this.props.navigation.navigate('Quiz');
  }

  // Check Result & Display
  renderResult = () =>{
    if(this.props.incorrect.length <= 0){
      return (
        <Block flex={1} style={Styles.winnerContainer}>
          <StatusBar hidden={true} />
          <Background />
          <SuccessBox restart={this.restartGame} />
        </Block>
      )
    }
    return(
      <Block flex={1} style={Styles.failedContainer}>
        <StatusBar hidden={true} />
        <Background />
        <FailedBox answer={this.props.answers} failed={this.props.incorrect} restart={this.restartGame} />
      </Block>
    )
  }

  render(){
    return this.renderResult();
  }
}

const mapStateToProps = function(state) {
  return {
    answers: state.quiz.correctAnswers,
    incorrect: state.quiz.incorrectAnswers
  }
}
export default connect(mapStateToProps,appActions)(Results);

