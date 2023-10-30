// import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav_section'>
            <nav className="navbar ">
                <div className="container-fluid">
                    <h2 className=""><span className='know' style={{ color: "darkorchid", }}>KNOW</span>LEDGE <span className='cafee'>CAFEE</span></h2>
                    <div className="d-flex" role="search">
                        <img src="https://bityl.co/M1l3" className='author_img' alt="" />
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    );
};

export default Navbar;