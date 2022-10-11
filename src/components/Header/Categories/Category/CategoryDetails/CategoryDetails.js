import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuzDetails/QuizDetails';

const CategoryDetails = () => {
    const quiz = useLoaderData();
    const quizDetails = quiz.data.questions
    console.log(quizDetails)
    return (
        <div className='container'>
            <h3>Every thing About quiz </h3>
            {quizDetails.map(quiz => <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>)}
        </div>
    );
};

export default CategoryDetails;