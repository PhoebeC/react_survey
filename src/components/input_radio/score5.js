import React, { Component } from 'react';
import { Field } from 'redux-form';
import RadioVert from './radio_vert';

class Score5 extends Component {
	constructor(props){
		super(props);

	}

	saveResponse(e){
		this.props.saveAnswer({
			questionId:this.props.current.id,
			answer_score: e.target.value
		})
	}

	render() {

		return (

			<div className='radio-vert'>
				<Field 
					name='score1'
					component = {RadioVert}
					rating='1' 
					label='Not at all'
					altText='image of face - rating 1 of 5'
					src='src/components/survey_question/assets/face-1.svg'
					save={this.saveResponse.bind(this)}
					currentAnswer={this.props.currentAnswer}
				/>
				<Field 
					name='score2'
					component = {RadioVert}
					rating='2' 	
					label='A little'
					altText='image of face - rating 2 of 5'
					src='src/components/survey_question/assets/face-2.svg'
					save={this.saveResponse.bind(this)}
					currentAnswer={this.props.currentAnswer}
					

				/>
				<Field
					name='score3'
					component = {RadioVert}
					rating='3' 
					label='Somewhat'
					altText='image of face - rating 3 of 5'
					src='src/components/survey_question/assets/face-3.svg'
					save={this.saveResponse.bind(this)}
					currentAnswer={this.props.currentAnswer}
					

				/>
				<Field
					name='score4'
					component = {RadioVert}
					rating='4' 
					label='Quite a bit'	
					altText='image of face - rating 4 of 5'
					src='src/components/survey_question/assets/face-4.svg'
					save={this.saveResponse.bind(this)}
					currentAnswer={this.props.currentAnswer}
					
				/>
				<Field
					name='score5'
					component = {RadioVert}
					rating='5' 
					label='Highly'
					altText='image of face - rating 5 of 5'
					src='src/components/survey_question/assets/face-5.svg'
					save={this.saveResponse.bind(this)}
					currentAnswer={this.props.currentAnswer}
					
				/>
			</div>
			
		);
	}
}

export default Score5;
