import React from "react";
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Text, Block } from 'galio-framework';
import * as appActions from '../redux/actions/app';
import { QuestionBox } from '../components';


class Quiz extends React.Component {

  async componentDidMount(){
    await this.getQuestions();
    return;
  }

  componentDidUpdate(prevProps){
    if(this.props.question !== prevProps.question && this.props.question <= this.props.allQuestions.length-1){
      return this.setHeader();
    }
  }
  
  setHeader = () => {
    const gameStart = this.props.startGame;
    const allQ = this.props.allQuestions;
    const curr = this.props.question;
    if(gameStart === true) {
      return this.props.navigation.setParams({title: allQ[curr].category.split(':')[0]});
    }
  }

  getQuestions = async() => {
    await this.props.runQuestions();
    return this.setHeader();
  }

  submitAnswers = async(x,y) => {
    const lastQuestion = true;      // last Question Indicator
    const allQ = this.props.allQuestions;
    const curr = this.props.question;
    if(curr < allQ.length-1){
      return this.props.runQuestions(x,y);
    }
    await this.props.runQuestions(x,y,lastQuestion);
    return this.props.navigation.navigate('QuizResult');
  }

  renderQuestions = () => {
    const gameStart = this.props.startGame;
    const allQ = this.props.allQuestions;
    const curr = this.props.question;

    if(gameStart === true) {
      return <QuestionBox question={allQ[curr]} answer={this.submitAnswers} />
    }
    return (
      <Block center middle flex={1}>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </Block>
    )
  };

  render(){
    return this.renderQuestions();
  }
}

const mapStateToProps = function(state) {
  return {
    allQuestions: state.quiz.quizQuestions,
    question: state.quiz.currentQuestion,
    startGame: state.quiz.startGame,
  }
}
export default connect(mapStateToProps,appActions)(Quiz);
