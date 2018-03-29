import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Header from '../../components/header/header';
import EmailForm from '../../components/email/email_form';
import _ from "lodash";
import { submitFullSurvey } from "../../actions/";

class EmailOptIn extends Component {



	submitSurvey(data){
		
		let formData = {
			responder: data,
			answers: _.values(this.props.responses.answers)
		};
		
		this.props.dispatch( submitFullSurvey(formData) );
	
	}

	render(){
		const animationDirection = this.props.survey.animation;
		return(
			<div className='survey-background'>
				<a className='nav-back' onClick={browserHistory.goBack}>← Back</a>
				<Header onSurvey='survey-logo'/>
				<CSSTransitionGroup 
						className='email-route'
						transitionName={animationDirection === 'forward' ? 'moveForward' : 'moveBackward'}
						transitionEnterTimeout={500} 
						transitionLeaveTimeout={500} 
						component='div' 
						transitionAppear={true} 
						transitionAppearTimeout={1000}>
						
						<EmailForm submitSurvey={ this.submitSurvey.bind(this)}/>
						
						
				</CSSTransitionGroup>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		survey: state.survey,
		responses: state.responses
	}
}

export default connect(mapStateToProps)(EmailOptIn);