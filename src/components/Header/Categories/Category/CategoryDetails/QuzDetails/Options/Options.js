import React from 'react';

const Options = ({ option }) => {
    console.log(option)
    return (
        <div className='text-center'>
            <input type="checkbox" />
            <button className='border border-primary mt-2 fw-bold rounded outline-primary p-2 ms-2'>  {option}</button>
        </div>
    );
};

export default Options;