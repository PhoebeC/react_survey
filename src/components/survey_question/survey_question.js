import React, { Component } from 'react';

export default class SurveyQuestion extends Component {
	render() {
		return(
			<div className='animate-in'>
				<p className='survey-question'>How satisfied are you with your overall shopping experience at Foot Locker?</p>
				<div className='radio-form'>
					<label className='radio-form__option'>
						<img src='src/components/survey_question/assets/face-1.svg' alt='face image rating 1' />
						<input className='radio-form__input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option1' />
						<p className='radio-form__desciption'>Not at all</p>
					</label>
					<label className='radio-form__option'>
						<img src='src/components/survey_question/assets/face-2.svg' alt='face image rating 2' />
						<input className='radio-form__input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option2' />
						<p className='radio-form__desciption'>A little</p>
					</label>
					<label className='radio-form__option'>
						<img src='src/components/survey_question/assets/face-3.svg' alt='face image rating 3' />
						<input className='radio-form__input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option3' />
						<p className='radio-form__desciption'>Somewhat</p>
					</label>
					<label className='radio-form__option'>
						<img src='src/components/survey_question/assets/face-4.svg' alt='face image rating 4' />
						<input className='radio-form__input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option4' />
						<p className='radio-form__desciption'>Quite a bit</p>
					</label>
					<label className='radio-form__option'>
						<img src='src/components/survey_question/assets/face-5.svg' alt='face image rating 5' />
						<input className='radio-form__input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option5' />
						<p className='radio-form__desciption'>Highly</p>
					</label>
				</div>
			</div>
		);
	}
}