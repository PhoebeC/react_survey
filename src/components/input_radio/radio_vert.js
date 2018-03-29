import React from 'react';
import classnames from 'classnames';


const RadioVert = (props, field) => {
	const radioVertClasses = classnames({
		'radio-vert__option': true
		//'radio-vert--checked': document.querySelector(".radio-vert__input").checked
	});

	//console.log(document.querySelector(".radio-vert__input:checked"));

	return (
		<label className={radioVertClasses}>
			<img src={props.src} alt={props.altText} />
			<input 
				{...field.input} 
				className='radio-vert__input' 
				type='radio' 
				name={props.name} 
				onChange={props.save} 
				value={props.rating}
				checked={props.currentAnswer && props.currentAnswer.answer_score === props.rating}
			/>
			<div className='custom-input'></div>
			<p className='radio-vert__desciption'>{props.label}</p>
		</label>
	);
}

export default RadioVert;