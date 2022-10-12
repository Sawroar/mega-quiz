import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
const Category = ({ category }) => {
    const { id, logo, name, } = category;
    return (
        <div className='container'>
            <div className=''>
                <div className="col">
                    <div className="card h-100 mb-5 ">
                        <img src={logo} className="card-img-top img-fluid bg-dark" alt="..." />
                        <div className="card-body bg-light">
                            <h5 className="card-title "> {name}</h5>
                            <Link to={`/quiz/${id}`}>
                                <button type="button" className="btn btn-primary">Start Practice Here <span><ArrowRightIcon style={{ height: '30px' }}> </ArrowRightIcon></span></button></Link>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Category;