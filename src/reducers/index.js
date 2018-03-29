import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SurveyReducer from './reducer_survey';
import ResponsesReducer from './reducer_responses';

const rootReducer = combineReducers({
	form: formReducer,
	survey: SurveyReducer,
	responses: ResponsesReducer
});

export default rootReducer;
