import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-light rounded p-1  '>
            <div className='d-flex align-items-center justify-content-between container shadow-sm p-3 mb-5 mt-3 bg-body rounded'>
                <div className='text-success fs-3 mt-3 text-bolder'>
                    Mega Quiz
                </div>
                <div className='text-decoration-none header mt-4'>
                    <Link to='/'> <Button variant="outline-primary">Categories</Button></Link>
                    <Link to='/statistics'><Button variant="outline-primary">Statistics</Button></Link>
                    <Link to='/blog'><Button variant="outline-primary">Blog</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;