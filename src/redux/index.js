import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import quizReducer from './reducers/quiz';

const rootReducer = combineReducers({
    quiz: quizReducer,
});
  
const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;