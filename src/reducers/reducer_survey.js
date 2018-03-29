 import { FETCH_QUESTIONS, UPDATE_CURRENT_QUESTION, SET_SURVEY_CONTAINER } from '../actions/types';

 const currentState = {
	 "questions": [
			    {
			      "id": 1,
			      "optional_text": "This survey should only take a few minutes.",
			      "question": "How satisfied are you overall with this shopping experience at Foot Locker?",
			      "question_type": "score5",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 1,
			      "answer_options": []
			    },
			    {
			      "id": 2,
			      "optional_text": "",
			      "question": "How likely are you to recommend Foot Locker?",
			      "question_type": "score5",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 2,
			      "answer_options": []
			    },
			    {
			      "id": 3,
			      "optional_text": "",
			      "question": "How satisfied are you with the following aspects of your visit to Foot Locker?",
			      "question_type": "score5",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 3,
			      "answer_options": []
			    },
			    {
			      "id": 4,
			      "optional_text": "",
			      "question": "Which of the following best describes how your Foot Locker visit ended today?",
			      "question_type": "chooseOne",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 4,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 4,
				          "answer": "I looked around and left",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 4,
				          "answer": "I placed items in the shopping cart, then left",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 3,
				          "question_id": 4,
				          "answer": "See costs",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 4,
				          "question_id": 4,
				          "answer": "Gather product details",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 5,
				          "question_id": 4,
				          "answer": "See coupons, discounts, or sale",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]	
	    		},
			    {
			      "id": 5,
			      "optional_text": "",
			      "question": "What is the primary reason that you came to Foot Locker's website today?",
			      "question_type": "chooseOne",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 5,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 5,
				          "answer": "See costs",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 5,
				          "answer": "Browse, look around, and see what's new",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 3,
				          "question_id": 5,
				          "answer": "See coupons, discount, or sale",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 4,
				          "question_id": 5,
				          "answer": "Buy/make purchase",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 5,
				          "question_id": 5,
				          "answer": "Other",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]	
	    		},
			    {
			      "id": 6,
			      "optional_text": "Tell us a bit about yourself (optional)",
			      "question": "Gender",
			      "question_type": "chooseOne",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 6,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 6,
				          "answer": "Female",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 6,
				          "answer": "Male",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 3,
				          "question_id": 6,
				          "answer": "I'd rather not say",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]	
	    		},
			    {
			      "id": 7,
			      "optional_text": "Tell us a bit about yourself (optional)",
			      "question": "Age",
			      "question_type": "chooseOne",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 7,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 7,
				          "answer": "18-34",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 7,
				          "answer": "35-49",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 3,
				          "question_id": 7,
				          "answer": "50-69",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 4,
				          "question_id": 7,
				          "answer": "70 or older",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 5,
				          "question_id": 7,
				          "answer": "I'd rather not say",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]	
	    		}
    		],
			counter: 0,
			progress: 8,
			animation: 'forward',
			survey_started: false
 }

export default function( state = currentState, action ) {
 	switch (action.type) {
 		case FETCH_QUESTIONS: {
 			//return action.payload;
			break;
		}
		
		case UPDATE_CURRENT_QUESTION:{
			
			return {
				...state,
				counter: action.payload.counter,
				progress: action.payload.progress,
				animation: action.payload.animation
			}
			
			break;
		}

		case SET_SURVEY_CONTAINER:{
			return{
				...state,
				survey_started: true
			}

			break;
		}
			
			
		
 	}

 	return state;
}




/*
export default function() {
	return {
		"questions": 
			[
			    {
			      "id": 1,
			      "optional_text": "This survey should only take a few minutes.",
			      "question": "How satisfied are you overall with this shopping experience at Foot Locker?",
			      "question_type": "score5",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 1,
			      "answer_options": []
			    },
			    {
			      "id": 2,
			      "optional_text": "",
			      "question": "How likely are you to recommend Foot Locker?",
			      "question_type": "score5",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 2,
			      "answer_options": []
			    },
			    {
			      "id": 3,
			      "optional_text": "",
			      "question": "How satisfied are you with the following aspects of your visit to Foot Locker?",
			      "question_type": "score5",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 3,
			      "answer_options": []
			    },
			    {
			      "id": 4,
			      "optional_text": "",
			      "question": "Which of the following best describes how your Foot Locker visit ended today?",
			      "question_type": "chooseOne",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 4,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 4,
				          "answer": "I looked around and left",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 4,
				          "answer": "I placed items in the shopping cart, then left",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 3,
				          "question_id": 4,
				          "answer": "See costs",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 4,
				          "question_id": 4,
				          "answer": "Gather product details",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 5,
				          "question_id": 4,
				          "answer": "See coupons, discounts, or sale",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]	
	    		},
			    {
			      "id": 5,
			      "optional_text": "",
			      "question": "What is the primary reason that you came to Foot Locker's website today?",
			      "question_type": "chooseOne",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 5,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 5,
				          "answer": "See costs",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 5,
				          "answer": "Browse, look around, and see what's new",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 3,
				          "question_id": 5,
				          "answer": "See coupons, discount, or sale",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 4,
				          "question_id": 5,
				          "answer": "Buy/make purchase",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 5,
				          "question_id": 5,
				          "answer": "Other",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]	
	    		},
			    {
			      "id": 6,
			      "optional_text": "Tell us a bit about yourself (optional)",
			      "question": "Gender",
			      "question_type": "chooseOne",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 6,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 6,
				          "answer": "Female",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 6,
				          "answer": "Male",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 3,
				          "question_id": 6,
				          "answer": "I'd rather not say",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]	
	    		},
			    {
			      "id": 7,
			      "optional_text": "Tell us a bit about yourself (optional)",
			      "question": "Age",
			      "question_type": "chooseOne",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 7,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 7,
				          "answer": "18-34",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 7,
				          "answer": "35-49",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 3,
				          "question_id": 7,
				          "answer": "50-69",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 4,
				          "question_id": 7,
				          "answer": "70 or older",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 5,
				          "question_id": 7,
				          "answer": "I'd rather not say",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]	
	    		},

	    		//responder
	    		//email
	    		//remarketable
	    		//panel
	    		{
			      "id": 8,
			      "optional_text": "Please enter the email address where you’d like us to send your offer.",
			      "question": "",
			      "question_type": "email_optIn",
			      "answer_option_id": null,
			      "created_at": "2017-05-05T04:00:00.000Z",
			      "modified_at": "2017-05-05T04:00:00.000Z",
			      "sort_order": 7,
			      "answer_options": [
				        {
				          "id": 1,
				          "question_id": 8,
				          "answer": "Sign me up to receive emails and coupons from Foot Locker.",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        },
				        {
				          "id": 2,
				          "question_id": 8,
				          "answer": "Yes! I would love to earn gift cards for my opinions by taking surveys from our partner, Bizrate Rewards.",
				          "sort_order": null,
				          "created_at": "2017-05-05T04:00:00.000Z",
				          "modified_at": "2017-05-05T04:00:00.000Z",
				          "followup_questions": []
				        }
			        ]
		        }
    		]
		};
}
*/