import React from 'react';
import './QuizDetails.css'
const QuizDetails = ({ quiz }) => {
    const { question, options, name } = quiz
    return (
        <div className='contianer  shadow-sm p-3  mt-3 mb-5 bg-body rounded bg-light border-dark'>
            <h3 className='text-center mb-3'>Question:{question.slice(3, question.length - 4)}</h3>
            <div className='container mt-3 options'>
                <div className=' d-flex mt-2 justify-content-around container'><div>
                    <button className='border border-primary mt-2 fw-bold rounded outline-primary p-2'>  {options[0]}</button> <br />
                    <button className='border border-primary  fw-bold  mt-2  rounded p-2 outline-primary'>  {options[1]}</button><br />
                    <button className='border border-primary  rounded p-2 fw-bold mt-2'>  {options[2]}</button> <br />
                    <button className='border border-primary  rounded p-2 fw-bold mt-2'>  {options[3]}</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;