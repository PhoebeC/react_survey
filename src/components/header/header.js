import React, { Component } from 'react';
import classnames from 'classnames';

export default class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const Logoclasses = classnames({
			'host-logo': true,
			'survey-logo': this.props.onSurvey
		});
		
		return(
			<img 
				className={Logoclasses}
				alt='Foot Locker logo'
				src='src/assets/logo-foot-locker.png' />
		);
	}
}