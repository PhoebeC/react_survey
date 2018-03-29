import { SAVE_ANSWER } from '../actions/types';


const currentState = {
	answers:{}
}

export default function( state = currentState, action ) {
 	switch (action.type) {
			
		case SAVE_ANSWER:{
			
			let newAnswers = {...state.answers}
			newAnswers[action.payload.questionId] = {...action.payload}
			
			return {...state,
				answers: newAnswers
			}
			
			break;
		}
		
 	}
 	return state;
}