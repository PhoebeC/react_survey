import React from 'react';

const RadioHorz = (props, field) => {
	return(
		<label className='radio-horz__option' onClick={props.selectAnswer}>
			<input 
				{...field.input} 
				className='radio-horz__input' 
				type='radio'   
				name={props.name} 
				value={props.answer} 
				onChange={props.save} 
				checked={props.currentAnswer && props.currentAnswer.answer_score == props.answer}
			/>
			<p className='radio-horz__label'>{props.label}</p>
		</label>
	);
}

export default RadioHorz;