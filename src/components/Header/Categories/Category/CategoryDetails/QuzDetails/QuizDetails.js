import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import Options from './Options/Options';
import './QuizDetails.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const QuizDetails = ({ quiz }) => {

    const { question, options, correctAnswer } = quiz;
    const diffToast = () => {
        toast(correctAnswer)
    }
    return (
        <div className='contianer  shadow-sm p-3  mt-3 mb-5 bg-body rounded bg-light border-dark'>
            <h3 className='text-center mb-3'>Question:{question.slice(3, question.length - 4)} <span> <EyeIcon onClick={diffToast} style={{ height: '30px' }}></EyeIcon></span></h3>
            <div className='container mt-3 options  mt-2 justify-content-around '>
                {options.map(option => <Options option={option} key={option} quiz={quiz} ></Options>)}

                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default QuizDetails;