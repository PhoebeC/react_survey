import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import { bindActionCreators } from 'redux';

import {SET_SURVEY_CONTAINER} from "../../actions/types";


class Invite extends Component {
	constructor(props) {
		super(props);
		this.handleGetStarted = this.handleGetStarted.bind(this);
	}

	handleGetStarted(){
		this.props.actions.survey_started({
			survey_started: true
		})
	}

	render() {
		return (
			<div>
		          <div className='invite-content'>
			          <Header />
			          <h2 className='modal__headline'>Tell us what you think</h2>
			          <p  className='modal__copy'>Complete a short survey and unlock a special offer as a thank you for your thoughts!</p>
			          <div className='button-group-vert'>
				          <Link onClick={this.handleGetStarted} className="button-primary button-split-invite" to='/survey'>Get special offer</Link>
				          <button onClick={this.handleCloseModal} className='button-text button-split-invite-text white'>No thanks</button>
			          </div>
		          </div>
		  		  <img className='split-invite-img' src='/src/routes/invite/assets/basketball.png' alt='man holding backetball' />
	        </div>
					
		);
	}
}

const mapStateToProps = (state) => {
	return {
		surveyContainer: state.survey.survey_started
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Invite);

// <div className={overlayClasses}>
// 				<Header />
// 				<img 
// 					className='overlay__hero'
// 					alt='illustration of mobile survey'
// 					//make sure to add npm file loader in final version to be able to import image files -- to clean up code.
// 					src='src/routes/invite/assets/survey-illustration.png' />
// 				<p className='overlay__text'>
// 					Complete our short survey to receive <span className='overlay__offer'>10% off</span> your next purchase
// 				</p>
// 				<Link onClick={this.handleClick} className="button-primary" to='/survey'>Let's get started!</Link>
// 			</div>