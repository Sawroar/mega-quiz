import React from 'react';

const QuizDetails = ({ quiz }) => {
    const { question, options, name } = quiz
    return (
        <div className='contianer  shadow-sm p-3  mt-3 mb-5 bg-body rounded bg-light'>
            <h3 className='text-center mb-3'>Question:{question} {name}</h3>
            <div className='container mt-3'>
                <div className='d-flex justify-content-around container'>
                    <p className='border border-primary bg-light rounded outline-primary p-2'>  {options[0]}</p>
                    <p className='border border-primary bg-light rounded p-2'>  {options[1]}</p>
                </div>
                <div className='d-flex justify-content-around container'>
                    <p className='border border-primary bg-light rounded p-2'>  {options[2]}</p>
                    <p className='border border-primary bg-light rounded p-2'>  {options[3]}</p>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;