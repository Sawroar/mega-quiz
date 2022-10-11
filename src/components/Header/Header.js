import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-light rounded p-1  '>
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="d-flex align-items-center  container shadow-sm p-3  mt-3 mb-5 bg-body rounded">
                    <div className=''>
                        <a className="navbar-brand text-info fs-3 mt-3 fw-bolder" href="#"> Mega Quiz</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent d-flex justify-content-end ">
                        <Link to='/'> <Button variant="outline-primary ms-5">Categories</Button></Link>
                        <Link to='/statistics'><Button variant="outline-primary ms-2">Statistics</Button></Link>
                        <Link to='/blog'><Button variant="outline-primary ms-2">Blog</Button></Link>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;