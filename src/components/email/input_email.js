import React from 'react';

const Email = props => {
	const inputId = props.fieldName;

	return(
		<div className="email">
		    <label className='email__label' htmlFor={inputId}>Email address</label>
		    <input type="email" className="email__input" id={inputId} />
	  	</div>
	);
}

export default Email;