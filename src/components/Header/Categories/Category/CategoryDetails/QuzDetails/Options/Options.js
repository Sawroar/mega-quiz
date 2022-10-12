import React, { useState } from 'react';

const Options = ({ option, quiz }) => {

    const { correctAnswer } = quiz;
    const myANs = [correctAnswer];
    const ans = myANs[0].length

    const [selected, setSelected] = useState();


    const handleChange = event => {
        const myEVen = event.target.value
        const myArr = [myEVen]

        const ly = myArr[0].length
        if (ly !== ans) {
            alert('your anser is correct')
        }
        else {
            alert('anser is incorrect')
        }

        setSelected(event.target.value)

    };


    return (
        <div className='text-center'>
            <input type="radio" value={correctAnswer}
                checked={selected === correctAnswer} onClick={handleChange} />
            <button className='border border-primary mt-2 fw-bold rounded outline-primary p-2 ms-2' name="choose"

            >  {option}</button>
        </div>
    );
};

export default Options;