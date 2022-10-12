import React from 'react';

const Display = () => {
    return (
        <div>
            <div className='text-white p-5 bg-secondary mega-bg rounded'> <h1>The Mega Quiz</h1>
                <p className='text-white'>Welcome to the Web Development <span className=' text-warning fw-bold fs-2'>Mega Quiz!</span>  Please select your answer and click submit. Question: Question goes here. Questions are taken from W3Schools tutorial.Play this game to review App Development. Fill in the blank: Website: A collection of. web pages on the World Wide Web</p>
                <button type="button" class="btn btn-info">See More ...</button>
            </div>
            <img className='mt-5' src="./../../../images/jeshoots-com--2vD8lIhdnw-unsplash.jpg" alt="" />
        </div >
    );
};

export default Display;