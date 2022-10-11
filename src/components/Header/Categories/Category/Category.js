import React from 'react';

const Category = ({ category }) => {
    const { logo, name, total } = category;
    return (
        <div className='container'>
            <div className=''>
                <div className="col-">
                    <div className="card h-100 bg-dark">
                        <img src={logo} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-white"> {name}</h5>

                            <p>{total}</p>
                            <button type="button" className="btn btn-info">Start Practice Here</button>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Category;