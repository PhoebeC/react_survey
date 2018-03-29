import React from 'react';

const Checkbox = props => {
	return (
		<label className='checkbox__option'>
  			<input type='checkbox' id={props.fieldName} /> 
  			<p className='checkbox__label'>{props.label}</p>
		</label>
	);
}

export default Checkbox;