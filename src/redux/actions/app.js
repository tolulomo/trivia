import allQuestions from '../../data/data.json'

// EXPORTING REDUX ACTION
export const GET_QUESTION = 'GET_QUESTION';
// export const NEXT_QUESTION = 'NEXT_QUESTION';
export const MY_ANSWER = 'MY_ANSWER';
export const FINISH_QUESTION = 'FINISH_QUESTION';


// ::::::: Start Game & Sort Questions ::::::::
const myQuestions = () => {
  //Handling Answers - Randomized Sorting
  let newArray = allQuestions.map(el => { 
    return { 
      //Rearrange answers
      ...el, incorrect_answers: sorter([...el.incorrect_answers, el.correct_answer])      
    }
  });

  //Handling Questions - Randomized Sorting
  newArray = sorter(newArray);

  return async dispatch => {
    dispatch({ type: GET_QUESTION, questions: newArray, start:true, currentQuestion: 0 });
  };
}

// Question and Answer Randomizer
const sorter = (arr) => {
  const passedArray = arr;
  const length = passedArray.length - 1;
  for(let question = length; question > 0; question--){
    const randomized = Math.floor(Math.random() * question)
    const temp = passedArray[question]
    passedArray[question] = passedArray[randomized]
    passedArray[randomized] = temp
  }
  return passedArray;
}

// ::::::: Answer Selection Function Handler ::::::: (Where X is the answer given and Y is the correct answer & Z is for last question toggling)
const myAnswer = (x,y,z) => {
  let status = undefined;

  if(x === y){
    status = "Correct"
  } else {
    status = "Incorrect"
  }

  if(!z) {
    return async dispatch => {
      dispatch({ type: MY_ANSWER, answer:status });
    };
  }
  return async dispatch => {
    dispatch({ type: FINISH_QUESTION, answer:status });
  };
}



// ::::::: MAIN QUESTION FUNCTION :::::::
export const runQuestions = (x,y,z) => {
  if(!x){
    return myQuestions();
  }
  return myAnswer(x,y,z);
};
