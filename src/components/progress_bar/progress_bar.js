import React, { Component } from 'react';
import { Line } from 'rc-progress'

export default class ProgressBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			
		};
	}
	render(){
		return(
			<Line 
				percent={this.props.progress}
				strokeWidth='3'
				strokeColor='#37A5CC'
				trailColor='#D7EDF5'
				trailWidth='3'
			/>
		);
	}
}