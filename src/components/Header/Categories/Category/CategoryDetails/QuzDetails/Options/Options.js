import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Options = ({ option, quiz }) => {

    const { correctAnswer } = quiz;
    const myANs = [correctAnswer];
    console.log(myANs)
    const ans = myANs[0].length
    const [selected, setSelected] = useState();

    const handleChange = event => {
        const myEVen = event.target.value
        const myArr = [myEVen]

        const ly = myArr[0].length
        console.log(ly)
        // if (ly === ans) {
        //     alert('your anser is correct')
        // }
        // else {
        //     alert('anser is incorrect')
        // }

        setSelected(event.target.value)

    };


    return (
        <div className='text-center'>
            <input type={'radio'}
                name="choose"

                checked={selected === correctAnswer}
                onClick={handleChange} />
            <button
                className='border border-primary mt-2 fw-bold rounded outline-primary p-2 ms-2' name="choose"

            >  {option}</button>
        </div>
    );
};

export default Options;




// const Ans = ({ answer, quiz }) => {

//     const { correctAnswer } = quiz;
//     const myANs = [correctAnswer];
//     const ans = myANs[0].length
//     const [selected, setSelected] = useState();


//     const handleChange = event => {
//         const myEVen = event.target.value
//         const myArr = [myEVen]
//         const ly = myArr[0].length

//         if (ly === ans) {
//             toast.success('🦄 Wow Keep it Up!', {
//                 position: "top-center",
//                 autoClose: 2000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });

//         } else {

//             toast.success('🦄 Ops! Try Again!', {
//                 position: "top-center",
//                 autoClose: 2000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });

//         }
//         setSelected(event.target.value)

//     };


//     return (
//         <div>
//             <div className='border flex justify-center items-center lg:text-start md:text-center shadow-xl py-7  m-5 rounded-2xl'>

//                 <button className=' lg:ml-3 '><input type={'radio'}
//                     name="choose"
//                     value={answer}
//                     checked={selected === answer}
//                     onClick={handleChange} />
//                     <p className='py-4  lg:text-[17px] md:text-[15px] lg:m-0 md:m-4'>
//                         {answer}</p>
//                 </button>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };