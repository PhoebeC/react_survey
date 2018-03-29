import axios from "axios";

import { 
	FETCH_QUESTIONS, 
	UPDATE_CURRENT_QUESTION, 
	SAVE_ANSWER,
	SET_SURVEY_CONTAINER 
} from './types';

export function setSurveyContainer() {
	
	return {
		type: SET_SURVEY_CONTAINER,
		surveyContainer: true,
		payload: true
	}
}

export function fetchQuestions() {
	return {
		type: FETCH_QUESTIONS,
		payload: data
	}
}

export function updateCurrentQuestion(updatedQuestionInfo) {
	
	return {
		type: UPDATE_CURRENT_QUESTION,
		payload: updatedQuestionInfo
	}
	
}


export function saveAnswer(answerInfo) {
	
	return {
		type: SAVE_ANSWER,
		payload: answerInfo
	}
}

export function submitFullSurvey(data) {
	
	return function(dispatch) {
	
		let formData = {
			responder: data.responder,
			completed:true,
			answers: data.answers
		}
	
	
		dispatch({
			type:"FORM_SUBMIT_START",
			payload:true
		})
		
		axios.post(
			"http://localhost:3000/v1/api/1/survey/1/response",
			formData
		).then(function(data){
			
			if(data.success) {
				dispatch({
					type:"FORM_SUBMIT_SUCCESSFUL",
					payload:data
				})
			}
			else{
				dispatch({
					type:"FORM_SUBMIT_FAILED",
					payload:data
				})
			}
		}).catch(function(error){
			dispatch({
				type:"FORM_SUBMIT_FAILED",
				payload:error.response.data
			})
		})
		
	}
	
}
