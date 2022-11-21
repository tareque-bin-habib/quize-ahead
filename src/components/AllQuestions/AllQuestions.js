import React from 'react';
import './AllQuestions.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllQuestions = ({ quize }) => {
    console.log(quize)
    const { id, question, options, } = quize
    const handleEyeBtn = () => {
        toast(quize.correctAnswer)
    }

    return (
        <div>
            <div className='question-container'>
                <ToastContainer />

                <div className='questions-icon'>
                    <h4 className='heading'>Questions: {question}</h4>
                    <EyeIcon onClick={handleEyeBtn} className='text-dark eye-icon'></EyeIcon>
                </div>
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