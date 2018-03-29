import _ from 'lodash';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import classnames from 'classnames';
import Header from '../../components/header/header';
//import SurveyQuestion from '../survey_question/survey_question';
import ProgressBar from '../../components/progress_bar/progress_bar';
import Score5 from '../../components/input_radio/score5';
import ChooseOne from '../../components/input_radio/choose_one';

import * as SurveyActionCreators from '../../actions';

//import { updateCurrentQuestion, saveAnswer } from "../../actions/index";
 
class Survey extends Component {
	constructor(props){
		super(props);
		this.prevQuestion = this.prevQuestion.bind(this);
		this.saveAndContinue = this.saveAndContinue.bind(this);
	}

	prevQuestion(){
		const totalQuestions = this.props.survey.questions.length;
		const progressIncrements = 100/totalQuestions;
		const currentProgress = (this.props.survey.counter - 1) * progressIncrements;
		const prevQuestion = this.props.survey.counter - 1 < 0 ? this.props.survey.questions.length - 1 : this.props.survey.counter - 1;
		
		this.props.actions.updateCurrentQuestion({
			counter: prevQuestion,
			progress:currentProgress,
			animation: 'backward'
		});
	}

	saveAndContinue(data){
		const totalQuestions = this.props.survey.questions.length;
		const progressIncrements = 100/totalQuestions;
		const currentProgress = (this.props.survey.counter + 1) * progressIncrements;
		const nextQuestion = this.props.survey.counter + 1 < this.props.survey.questions.length ? this.props.survey.counter + 1 : this.props.survey.counter;

		this.props.actions.updateCurrentQuestion({
			counter: nextQuestion,
			progress:currentProgress,
			animation: 'forward'
		});

		this.props.actions.saveAnswer({
			questionId: data.questionId,
			answer_score: data.answer_score,
			answer_text: data.answer_text,
			answer_option_id: data.answer_option_id
		});

		if( this.props.survey.counter === this.props.survey.questions.length - 1 ) {
			this.props.history.push('/email');
		}
	}

	displayNavBack() {
		if ( this.props.survey.counter !== 0 ){
			return(
				<a className='nav-back' onClick={this.prevQuestion}>← Back</a>
			);
		}
	}

	renderQuestion(){
		const currentQuestion = this.props.survey.questions[this.props.survey.counter];
		//notes on conditional rendering https://www.robinwieruch.de/conditional-rendering-react/
		const AnswerInput = {
			score5: <Score5 current={currentQuestion} currentAnswer={this.props.responses.answers[currentQuestion.id]}  saveAnswer={this.saveAndContinue.bind(this)} />,
			chooseOne: <ChooseOne current={currentQuestion} currentAnswer={this.props.responses.answers[currentQuestion.id]} saveAnswer={this.saveAndContinue.bind(this)} />,
		};
		const AnswerType = currentQuestion.question_type;

		const questionClasses = classnames({
			'survey-question': true,
			'chooseOne-question': 'chooseOne' === AnswerType
		});

		return(
			<div>
				<p className='survey-helper-text'>{currentQuestion.optional_text}</p>
				<h3 className={questionClasses}>{currentQuestion.question}</h3>
				{AnswerInput[AnswerType]}
			</div>
		);	
		
	}

	render() {
		const animationDirection = this.props.survey.animation;

		return(
			<div className='survey-background'>
				{this.displayNavBack()}
				<Header onSurvey='survey-logo' />
				<ProgressBar progress={this.props.survey.progress} />
		        <form className='survey-form'>
					<CSSTransitionGroup 
						className='survey-form'
						transitionName={animationDirection === 'forward' ? 'moveForward' : 'moveBackward'}
						transitionEnterTimeout={500} 
						transitionLeaveTimeout={500} 
						component='div' 
						transitionAppear={true} 
						transitionAppearTimeout={1000}>
							<div key={this.props.survey.counter}>{this.renderQuestion()}</div>
					</CSSTransitionGroup>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		survey: state.survey,
		responses: state.responses
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(SurveyActionCreators, dispatch)
	};
}

Survey = reduxForm({
	form: 'SurveyForm'
})(Survey);

export default connect(mapStateToProps, mapDispatchToProps)(Survey);


