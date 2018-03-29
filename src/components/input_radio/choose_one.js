import _ from 'lodash';
import React, { Component } from 'react';
import { Field } from 'redux-form';
import RadioHorz from './radio_horz';

class ChooseOne extends Component {
	constructor(props){
		super(props);
	}

	saveResponse(e){
		this.props.saveAnswer({
			questionId: this.props.current.id,
			answer_score: e.target.value
		})
	}

	renderAnswers(){
		return this.props.current.answer_options.map((option) => {
			return (
				<Field 
					name={`option${option.id}`}
					component={RadioHorz}
					key={option.id} 
					label={option.answer} 
					answer={option.id} 
					save={this.saveResponse.bind(this)} 
					currentAnswer={this.props.currentAnswer}
				/>
			);
		});
	}


	render() {
		return(
			<div className='radio-horz'>
				{this.renderAnswers()}
			</div>
		);
	}
}

export default ChooseOne;
