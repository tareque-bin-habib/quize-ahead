import React from 'react';
import './AllQuestions.css'
const AllQuestions = ({ quize }) => {
    // console.log(quize)
    const { id, question, options } = quize

    return (
        <div>
            <div className='question-container'>
                <h4 className='heading'>Questions: {question}</h4>
                <div className='options'>
                    <div className='option-type d-flex'>
                        <input type="radio" name="habib" id="quize-0" value="quize-0" />
                        <label htmlFor="quize-0">{options[0]}</label>
                    </div>
                    <div className='option-type d-flex'>
                        <input type="radio" name="habib" id="quize-1" value="quize-1" />
                        <label htmlFor="quize-1">{options[1]}</label>
                    </div>
                    <div className='option-type d-flex'>
                        <input type="radio" name="habib" id="quize-2" value="quize-2" />
                        <label htmlFor="quize-2">{options[2]}</label>
                    </div>
                    <div className='option-type d-flex'>
                        <input type="radio" name="habib" id="quize-3" value="quize-3" />
                        <label htmlFor="quize-3">{options[3]}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllQuestions;