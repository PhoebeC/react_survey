import React, { Component } from 'react';
import ReactModal from 'react-modal';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ModalActionCreators from '../../actions';

class ModalContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			showModal: false,
			surveyContainer: false
		};

		this.setSurveyContainer = this.setSurveyContainer.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
    	this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	setSurveyContainer (e) {
		e.preventDefault()
		this.setState({ surveyContainer: true });
	}

	handleOpenModal () {
	    this.setState({ showModal: true });

	    const openModalAnimation = classnames({
	    	animateModal: true
	    });
  	}
	  
  	handleCloseModal () {
	    this.setState({ showModal: false });
  	}


  	render(){

  		const survey = classnames({
			surveyContainer: this.state.surveyContainer,
			Modal: true,
			animateModal: true
		});

  		console.log(this.state.surveyContainer);

	  	return (
			<div>
				<iframe id="demo"
				    title="demo"
				    width="100%"
				    height="100%"
				    frameBorder="0"
				    scrolling="yes"
				    marginHeight="0"
				    marginWidth="0"
				    allowFullScreen="true"
				    src="http://www.footlocker.com/product/model:272734/sku:BW1573/adidas-harden-vol.-1-mens/james-harden/">
				</iframe>

				<button className='btn-modal' onClick={this.handleOpenModal}>Trigger Modal</button>
		        <ReactModal 
		           isOpen={this.state.showModal}
		           contentLabel="Survey Overlay"
		           className={survey}
		           overlayClassName="Overlay"
		        >
		          <button className='button-close button-text' onClick={this.handleCloseModal}>x</button>
		          {this.props.children}
		        </ReactModal>
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
		actions: bindActionCreators(ModalActionCreators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);