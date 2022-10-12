import React from 'react';
import Options from './Options/Options';
import './QuizDetails.css'
const QuizDetails = ({ quiz }) => {

    const { question, options, } = quiz
    return (
        <div className='contianer  shadow-sm p-3  mt-3 mb-5 bg-body rounded bg-light border-dark'>
            <h3 className='text-center mb-3'>Question:{question.slice(3, question.length - 4)}</h3>
            <div className='container mt-3 options  mt-2 justify-content-around '>
                {options.map(option => <Options option={option} key={option} quiz={quiz}></Options>)}



            </div>
        </div>
    );
};

export default QuizDetails;