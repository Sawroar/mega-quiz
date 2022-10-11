import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, logo, name, total } = category;
    return (
        <div className='container'>
            <div className=''>
                <div className="col">
                    <div className="card h-100 ">
                        <img src={logo} className="card-img-top img-fluid bg-dark" alt="..." />
                        <div className="card-body bg-light">
                            <h5 className="card-title "> {name}</h5>

                            <p>{total}</p>
                            <Link to={`/quiz/${id}`}>
                                <button type="button" className="btn btn-primary">Start Practice Here</button></Link>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Category;