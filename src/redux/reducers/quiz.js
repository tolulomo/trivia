import { GET_QUESTION, MY_ANSWER, FINISH_QUESTION } from '../actions/app';

const initialState = {
  startGame: false,
  quizQuestions: [],
  answeredQuestions: [],
  currentQuestion: 0,
  correctAnswers: 0,
  incorrectAnswers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return{
        ...state,
        startGame: action.start,
        quizQuestions: action.questions,
        currentQuestion: action.currentQuestion,
        correctAnswers: 0,
        incorrectAnswers: []
      }
    case MY_ANSWER:
      return{
        ...state,
        answeredQuestions: [...state.answeredQuestions, action.answer],
        currentQuestion: state.currentQuestion + 1
      }
    case FINISH_QUESTION:
      const answers = [...state.answeredQuestions, action.answer];
      let incorrectAnswer = answers.map((el,index) => {
        if(el == "Incorrect"){
          return index
        }
      }).filter(el => el !== undefined).map(i => state.quizQuestions[i])
      const correctAnswer = (answers.length - incorrectAnswer.length);
      return{
        ...state,
        startGame: false,
        answeredQuestions: answers,
        correctAnswers: correctAnswer,
        incorrectAnswers: incorrectAnswer,
      }
  }
  return state;
};