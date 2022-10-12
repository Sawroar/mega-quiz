import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Options = ({ option, quiz }) => {

    const { correctAnswer } = quiz;
    const myANs = [correctAnswer];
    const ans = myANs[0].length

    const [selected, setSelected] = useState();

    const toaster = event => {
        const myEven = event.target.value
        const myArray = [myEven]

        const myOption = myArray[0].length

        if (myOption !== ans) {
            toast('answer is wrong')
        }
        else {
            toast('your answer is correct')
        }

        setSelected(event.target.value)

    };


    return (
        <div className='text-center'>
            <input type={'radio'}
                name="choose"
                value={option}
                checked={selected === option}
                onClick={toaster} />
            <button
                className='border border-primary mt-2 fw-bold rounded outline-primary p-2 ms-2' name="choose"
            >  {option}</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Options;




