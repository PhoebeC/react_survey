import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Email from './input_email';
import Checkbox from '../email/input_checkbox';

class EmailOptIn extends Component {

	handleSubmit(e){
		e.preventDefault();
		
		this.props.submitSurvey({
			email: document.getElementById('survey_email').value,
			remarketable: document.getElementById('remarketable').checked,
			joinedpanel: document.getElementById('joinedpanel').checked
		})
	}

	render(){
		return(

			<div>
				<p className='survey-helper-text'>Please enter the email address where you’d like us to send your offer.</p>
				<Email fieldName="survey_email"/>
				<div className='checkbox'>
					<Checkbox label='Sign me up to receive emails and coupons from Foot Locker.' fieldName="remarketable"/>
					<Checkbox label='Yes! I would love to earn gift cards for my opinions by taking surveys from our partner, Bizrate Rewards.' fieldName="joinedpanel"/>
				</div>
				{/*<a className='button-primary' onClick={ this.handleSubmit.bind(this) }>Submit</a>*/}
				<Link className='button-primary' to='/'>Submit</Link>

			</div>

		);
	}
}

export default EmailOptIn;